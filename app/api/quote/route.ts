import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ message: "Quote API is working" });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      country,
      productCategory,
      products,
      quantity,
      quantityUnit,
      packagingPreference,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Quotation Request: ${productCategory || "Products"} — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0f4c75, #1a6fa5); padding: 28px 32px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: -0.3px;">New Quotation Request</h2>
            <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Received from the Loyalty Global website</p>
          </div>

          <div style="padding: 28px 32px; background: #f8fafc;">
            <h3 style="color: #0f4c75; font-size: 15px; margin: 0 0 14px; text-transform: uppercase; letter-spacing: 0.5px;">Customer Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px; vertical-align: top;">Full Name</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${fullName}</td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Company</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${companyName || "Not provided"}</td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px;"><a href="mailto:${email}" style="color: #0f4c75;">${email}</a></td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Phone</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${phone || "Not provided"}</td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Country</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${country || "Not provided"}</td>
              </tr>
            </table>
          </div>

          <div style="padding: 28px 32px; background: #ffffff; border-top: 2px solid #f0a500;">
            <h3 style="color: #0f4c75; font-size: 15px; margin: 0 0 14px; text-transform: uppercase; letter-spacing: 0.5px;">Product Requirements</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px; vertical-align: top;">Category</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${productCategory || "Not specified"}</td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Products</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${products || "Not specified"}</td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Quantity</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${quantity ? `${quantity} ${quantityUnit}` : "Not specified"}</td>
              </tr>
              <tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Packaging</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${packagingPreference || "Not specified"}</td>
              </tr>
              ${
                message
                  ? `<tr style="border-top: 1px solid #e2e8f0;">
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Additional Notes</td>
                <td style="padding: 8px 0; color: #1e293b; font-size: 14px; line-height: 1.6;">${message}</td>
              </tr>`
                  : ""
              }
            </table>
          </div>

          <div style="padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              This email was sent from the Loyalty Global website quotation form.<br/>
              Reply directly to this email to contact the customer.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Quotation request sent successfully" });
  } catch (error) {
    console.error("Quote email error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send quotation request" },
      { status: 500 }
    );
  }
}
