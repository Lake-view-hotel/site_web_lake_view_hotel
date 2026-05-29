import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Service email non configuré" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { nom, email, tel, message } = await req.json();

  if (!nom || !email || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "contact@lakeviewhotel.mg",
      to: "contact@lakeviewhotel.mg",
      subject: `Demande de séjour — ${nom}`,
      html: `
        <h2>Nouvelle demande de séjour</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${tel || "—"}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
