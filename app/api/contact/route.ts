import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Ori Company Contact" <${process.env.GMAIL_USER}>`,
    to: "wglconsultingdc@gmail.com",
    replyTo: email,
    subject: `[WGL Site] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#000;padding:24px 32px;border-radius:12px 12px 0 0">
          <img src="https://wgl-consulting-website.vercel.app/logos/Ori-Badge04.png"
               alt="Ori Company" width="48" style="display:block;margin-bottom:12px" />
          <span style="color:#7BC49A;font-size:11px;letter-spacing:.12em;font-weight:600">
            NEW MESSAGE — WGL CONSULTING WEBSITE
          </span>
        </div>
        <div style="background:#f7f7f7;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e5e5">
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
            <tr>
              <td style="padding:8px 0;color:#888;font-size:12px;font-weight:600;
                         letter-spacing:.08em;text-transform:uppercase;width:80px">Name</td>
              <td style="padding:8px 0;color:#111;font-size:14px">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;font-size:12px;font-weight:600;
                         letter-spacing:.08em;text-transform:uppercase">Email</td>
              <td style="padding:8px 0;color:#111;font-size:14px">
                <a href="mailto:${email}" style="color:#7BC49A">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;font-size:12px;font-weight:600;
                         letter-spacing:.08em;text-transform:uppercase">Subject</td>
              <td style="padding:8px 0;color:#111;font-size:14px">${subject}</td>
            </tr>
          </table>
          <div style="border-top:1px solid #e5e5e5;padding-top:24px">
            <p style="color:#888;font-size:12px;font-weight:600;letter-spacing:.08em;
                      text-transform:uppercase;margin:0 0 12px">Message</p>
            <p style="color:#333;font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
          </div>
          <div style="margin-top:32px;padding-top:20px;border-top:1px solid #e5e5e5">
            <p style="color:#aaa;font-size:11px;margin:0">
              Sent via <strong style="color:#7BC49A">oricompany.com</strong> contact form
            </p>
          </div>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
