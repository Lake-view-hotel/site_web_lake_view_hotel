import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Service email non configuré" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { nom, email, tel, chambre, personnes, arrivee, depart, message } = await req.json();

  if (!nom || !email || !chambre || !personnes || !arrivee || !depart) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Lake View Hôtel <onboarding@resend.dev>",
      to: "lakeviewampefy@gmail.com",
      replyTo: email,
      subject: `Demande de réservation — ${nom} · ${arrivee} → ${depart}`,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${tel || "—"}</p>
        <hr/>
        <p><strong>Type de chambre :</strong> ${chambre}</p>
        <p><strong>Nombre de personnes :</strong> ${personnes}</p>
        <p><strong>Arrivée :</strong> ${arrivee}</p>
        <p><strong>Départ :</strong> ${depart}</p>
        ${message ? `<hr/><p><strong>Message :</strong><br/>${message}</p>` : ""}
      `,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}
