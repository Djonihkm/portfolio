import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "../../lib/constants";

export async function POST(req: NextRequest) {
  const { name, email, phone, message, preference } = await req.json();

  if (
    !name ||
    !message ||
    (preference === "email" && !email) ||
    (preference === "phone" && !phone)
  ) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (
    !smtpHost ||
    !Number.isInteger(smtpPort) ||
    smtpPort < 1 ||
    smtpPort > 65535 ||
    !smtpUser ||
    !smtpPass
  ) {
    console.error(
      "Contact email delivery is not configured: SMTP settings are missing or invalid.",
    );
    return NextResponse.json(
      { error: "EMAIL_NOT_CONFIGURED" },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const prefLabel = preference === "phone" ? "Téléphone" : "Email";
  const prefColor = preference === "phone" ? "#6366f1" : "#C0392B";
  const contactRow =
    preference === "phone"
      ? `<tr><td style="padding:10px 0;color:#999;width:100px">Téléphone</td><td style="padding:10px 0"><a href="tel:${phone}" style="color:#6366f1;font-weight:600">${phone}</a></td></tr>`
      : `<tr><td style="padding:10px 0;color:#999;width:100px">Email</td><td style="padding:10px 0"><a href="mailto:${email}" style="color:#C0392B;font-weight:600">${email}</a></td></tr>`;

  try {
    await transporter.sendMail({
      from: `"Portfolio — ${name}" <${smtpUser}>`,
      to: CONTACT_EMAIL,
      replyTo: email || undefined,
      subject: `Nouveau message de ${name} — réponse souhaitée par ${prefLabel}`,
      html: `
      <div style="font-family:sans-serif;max-width:560px;margin:auto">
        <h2 style="color:#C0392B;margin-bottom:4px">Nouveau message</h2>
        <p style="color:#555;font-size:13px;margin-bottom:16px">Via le formulaire de contact du portfolio</p>
        <div style="display:inline-block;background:${prefColor}18;color:${prefColor};font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:4px 12px;border-radius:20px;margin-bottom:20px">
          Préfère être contacté par ${prefLabel}
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:10px 0;color:#999;width:100px">Nom</td><td style="padding:10px 0;color:#111;font-weight:600">${name}</td></tr>
          ${contactRow}
          ${email && preference === "phone" ? `<tr><td style="padding:10px 0;color:#999">Email</td><td style="padding:10px 0;color:#888">${email}</td></tr>` : ""}
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
        <p style="font-size:14px;color:#111;line-height:1.7;white-space:pre-wrap">${message}</p>
      </div>
    `,
    });
  } catch (error) {
    console.error(
      "Contact email delivery failed:",
      error instanceof Error ? error.message : "Unknown SMTP error",
    );
    return NextResponse.json(
      { error: "EMAIL_DELIVERY_FAILED" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
