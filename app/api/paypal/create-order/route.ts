import { NextResponse } from "next/server";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
const base = "https://api-m.sandbox.paypal.com"; // Use "https://api-m.paypal.com" for production

const packages = {
  south_island: { name: "South Island Escape", price: 1000 },
  central_heritage: { name: "Central Heritage Trail", price: 1200 },
  whole_island: { name: "Whole Island Immersion", price: 2500 },
};

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
    const body = await req.json();
    const { packageId, participants } = body;
    
    if (!packages[packageId as keyof typeof packages]) {
      return NextResponse.json({ error: "Invalid package" }, { status: 400 });
    }
    
    const selectedPackage = packages[packageId as keyof typeof packages];
    const totalAmount = selectedPackage.price * participants;

    const accessToken = await generateAccessToken();
    const url = `${base}/v2/checkout/orders`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      method: "POST",
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: totalAmount.toString(),
            },
            description: `${selectedPackage.name} - ${participants} Participant(s)`,
          },
        ],
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to create order:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
