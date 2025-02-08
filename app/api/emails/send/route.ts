import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
    },
  });

  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: subject,
      text: `New message from: ${firstName} ${lastName}\n\nMessage: ${message}`, // Plain text fallback
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Algotrimo Client Inquiry</title>
          </head>
          <body style="
            margin: 0;
            padding: 0;
            background-color: #f6f9fc;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
          ">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td align="center" style="padding: 24px;">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="
                    max-width: 600px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  ">
                    <!-- Header -->
                    <tr>
                      <td style="
                        padding: 32px 24px;
                        background: linear-gradient(to right, #1e293b, #334155);
                        border-radius: 8px 8px 0 0;
                      ">
                        <h1 style="
                          margin: 0;
                          color: #ffffff;
                          font-size: 24px;
                          font-weight: 600;
                          text-align: center;
                        ">Intervestment Inquiry</h1>
                      </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                      <td style="padding: 32px 24px;">
                        <!-- Sender Info -->
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td style="padding-bottom: 24px;">
                              <h2 style="
                                margin: 0 0 8px;
                                color: #1e293b;
                                font-size: 16px;
                                font-weight: 600;
                              ">From:</h2>
                              <p style="
                                margin: 0;
                                color: #334155;
                                font-size: 16px;
                                background: #f8fafc;
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid #e2e8f0;
                              ">${email}</p>
                            </td>
                          </tr>

                          <!-- Message -->
                          <tr>
                            <td>
                              <h2 style="
                                margin: 0 0 8px;
                                color: #1e293b;
                                font-size: 16px;
                                font-weight: 600;
                              ">Message:</h2>
                              <div style="
                                color: #334155;
                                font-size: 16px;
                                background: #f8fafc;
                                padding: 16px;
                                border-radius: 6px;
                                border: 1px solid #e2e8f0;
                                white-space: pre-wrap;
                              ">${message}</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="
                        padding: 24px;
                        background: #f8fafc;
                        border-top: 1px solid #e2e8f0;
                        border-radius: 0 0 8px 8px;
                        text-align: center;
                      ">
                        <p style="
                          margin: 0;
                          color: #64748b;
                          font-size: 14px;
                        ">© ${new Date().getFullYear()} Intervestment. All rights reserved.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to send email",
    });
  }
}
