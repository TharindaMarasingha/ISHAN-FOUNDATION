import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  }
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, organisation, interest, message } = body

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }

    // Email to ISHAN team
    await transporter.sendMail({
      from: `"ISHAN Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Inquiry from ${fullName} — ISHAN Website`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #FAF8F5; padding: 40px;">
          
          <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #2E1A0E; font-size: 24px; margin: 0;">
              New Inquiry — ISHAN Foundation
            </h1>
            <p style="color: #9C3F00; font-size: 12px; margin: 8px 0 0; letter-spacing: 0.1em; text-transform: uppercase;">
              Received from ishanfoundation.lk
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D5; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">
                Full Name
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D5; color: #2E1A0E; font-size: 15px;">
                ${fullName}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D5; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">
                Email
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D5; color: #C9A84C; font-size: 15px;">
                <a href="mailto:${email}" style="color: #C9A84C;">
                  ${email}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D5; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">
                Organisation
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D5; color: #2E1A0E; font-size: 15px;">
                ${organisation || 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D5; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">
                Area of Interest
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E8E0D5; color: #2E1A0E; font-size: 15px;">
                ${interest || 'Not specified'}
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">
              Message
            </p>
            <div style="background: white; border: 1px solid #E8E0D5; border-radius: 8px; padding: 20px; color: #2E1A0E; font-size: 15px; line-height: 1.7;">
              ${message}
            </div>
          </div>

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #E8E0D5; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #9C3F00; color: white; padding: 12px 28px; border-radius: 8px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;">
              Reply to ${fullName}
            </a>
          </div>

          <p style="color: #aaa; font-size: 11px; text-align: center; margin-top: 24px;">
            ISHAN Foundation · ishanfoundation.lk
          </p>
        </div>
      `
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"ISHAN Foundation" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: 'Thank you for connecting with ISHAN',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #FAF8F5; padding: 40px;">
          
          <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 20px; margin-bottom: 30px; text-align: center;">
            <h1 style="color: #2E1A0E; font-size: 22px; margin: 0;">
              Thank You, ${fullName}
            </h1>
            <p style="color: #9C3F00; font-size: 13px; margin: 8px 0 0; font-style: italic;">
              We have received your inquiry
            </p>
          </div>

          <p style="color: #2E1A0E; font-size: 15px; line-height: 1.8; margin-bottom: 16px;">
            Thank you for reaching out to ISHAN. Every meaningful journey begins with a conversation, and we are grateful you have chosen to begin yours with us.
          </p>

          <p style="color: #2E1A0E; font-size: 15px; line-height: 1.8; margin-bottom: 24px;">
            A member of our team will review your inquiry and respond within 2–3 business days. If your matter is urgent, please email us directly at
            <a href="mailto:info@ishanfoundation.lk" style="color: #C9A84C;">
              info@ishanfoundation.lk
            </a>
          </p>

          <div style="background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
            <p style="color: #6A2E00; font-style: italic; font-size: 16px; margin: 0; line-height: 1.6;">
              "One Humanity · One Nature · One Conscious Future"
            </p>
          </div>

          <p style="color: #aaa; font-size: 12px; text-align: center;">
            ISHAN Foundation<br>
            <a href="https://ishanfoundation.lk" style="color: #C9A84C;">
              ishanfoundation.lk
            </a>
          </p>
        </div>
      `
    })

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (error) {
    console.error('Nodemailer error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
