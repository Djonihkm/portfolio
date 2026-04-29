import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio — ${name}" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `Nouveau message de ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:auto">
        <h2 style="color:#C0392B;margin-bottom:4px">Nouveau message</h2>
        <p style="color:#555;font-size:13px;margin-bottom:24px">Via le formulaire de contact du portfolio</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:10px 0;color:#999;width:80px">Nom</td><td style="padding:10px 0;color:#111;font-weight:600">${name}</td></tr>
          <tr><td style="padding:10px 0;color:#999">Email</td><td style="padding:10px 0"><a href="mailto:${email}" style="color:#C0392B">${email}</a></td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <p style="font-size:14px;color:#111;line-height:1.7;white-space:pre-wrap">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
