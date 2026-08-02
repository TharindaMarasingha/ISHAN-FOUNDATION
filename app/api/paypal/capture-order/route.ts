import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const base = "https://api-m.sandbox.paypal.com"; // Use "https://api-m.paypal.com" for production

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
const resend = new Resend(RESEND_API_KEY);

async function generateAccessToken() {
  const auth = Buffer.from(PAYPAL_CLIENT_ID + ":" + PAYPAL_SECRET).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  
  const data = await response.json();
  return data.access_token;
}

export async function POST(req: Request) {
  try {
    const { 
      orderID, 
      packageName, 
      customerName, 
      customerEmail, 
      customerPhone, 
      participants, 
      amountPaid 
    } = await req.json();
    
    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders/${orderID}/capture`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    
    // Check if capture was successful
    if (data.status === "COMPLETED") {
      // Execute post-payment tasks asynchronously to not block the response or fail the request if they throw
      Promise.allSettled([
        handlePostPaymentTasks({
          orderID,
          packageName,
          customerName,
          customerEmail,
          customerPhone,
          participants,
          amountPaid,
          paymentStatus: data.status,
        })
      ]).catch(console.error);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to capture order:", error);
    return NextResponse.json({ error: "Failed to capture order" }, { status: 500 });
  }
}

async function handlePostPaymentTasks(details: any) {
  try {
    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from('bookings')
      .insert([
        {
          package_name: details.packageName,
          customer_name: details.customerName,
          customer_email: details.customerEmail,
          customer_phone: details.customerPhone,
          participants: details.participants,
          amount_paid: details.amountPaid,
          paypal_order_id: details.orderID,
          payment_status: details.paymentStatus,
        }
      ]);
      
    if (dbError) {
      console.error("Failed to insert booking into Supabase:", dbError);
    }

    // 2. Send Customer Confirmation Email
    try {
      await resend.emails.send({
        from: 'Samanvaya Retreats <info@ishanfoundation.lk>', // Update with a verified domain if needed
        to: [details.customerEmail],
        subject: `Reservation Confirmed - ${details.packageName}`,
        html: `
          <h1>Reservation Confirmed</h1>
          <p>Dear ${details.customerName},</p>
          <p>Thank you for reserving your spot for the Samanvaya retreat.</p>
          <ul>
            <li><strong>Package:</strong> ${details.packageName}</li>
            <li><strong>Participants:</strong> ${details.participants}</li>
            <li><strong>Amount Paid:</strong> $${details.amountPaid}</li>
            <li><strong>Booking Reference:</strong> ${details.orderID}</li>
          </ul>
          <p>We look forward to welcoming you.</p>
          <br/>
          <p>Warm regards,<br/>The ISHAN Foundation Team</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send customer confirmation email via Resend:", emailError);
    }

    // 3. Send Internal Notification Email
    try {
      await resend.emails.send({
        from: 'Samanvaya Bookings <bookings@ishanfoundation.lk>', // Update with a verified domain if needed
        to: ['info@ishanfoundation.lk'],
        subject: `New Booking - ${details.packageName} (${details.customerName})`,
        html: `
          <h2>New Booking Received</h2>
          <ul>
            <li><strong>Customer Name:</strong> ${details.customerName}</li>
            <li><strong>Customer Email:</strong> ${details.customerEmail}</li>
            <li><strong>Customer Phone:</strong> ${details.customerPhone}</li>
            <li><strong>Package:</strong> ${details.packageName}</li>
            <li><strong>Participants:</strong> ${details.participants}</li>
            <li><strong>Amount Paid:</strong> $${details.amountPaid}</li>
            <li><strong>Booking Reference (PayPal Order ID):</strong> ${details.orderID}</li>
          </ul>
        `,
      });
    } catch (adminEmailError) {
      console.error("Failed to send admin notification email via Resend:", adminEmailError);
    }

  } catch (error) {
    console.error("Unexpected error in handlePostPaymentTasks:", error);
  }
}
