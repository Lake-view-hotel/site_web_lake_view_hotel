"use client";
import { useEffect, useState } from "react";
import "./ReservationModal.css";

interface Props {
  onClose: () => void;
}

export default function ReservationModal({ onClose }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ nom: "", email: "", tel: "", message: "" });

  // Fermer avec Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-panel" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" width="18" height="18">
            <line x1="3" y1="3" x2="15" y2="15" />
            <line x1="15" y1="3" x2="3" y2="15" />
          </svg>
        </button>

        <div className="modal-label">Réservation</div>
        <h2 className="modal-title">Planifiez votre<br /><em>séjour</em></h2>
        <div className="modal-sep" />

        {status === "success" ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <svg viewBox="0 0 20 20" fill="none" stroke="#b08d5a" strokeWidth="1.4" width="22" height="22">
                <polyline points="4 10 8 14 16 6" />
              </svg>
            </div>
            <h3 className="modal-title" style={{ fontSize: "22px", marginBottom: "12px" }}>
              Message envoyé
            </h3>
            <p>Notre équipe vous contactera dans les plus brefs délais pour confirmer votre séjour.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-row">
              <div className="modal-field">
                <label htmlFor="nom">Nom</label>
                <input
                  id="nom" name="nom" type="text"
                  placeholder="Jean Dupont"
                  value={form.nom} onChange={handleChange}
                  required
                />
              </div>
              <div className="modal-field">
                <label htmlFor="tel">Téléphone</label>
                <input
                  id="tel" name="tel" type="tel"
                  placeholder="+261 34 00 000 00"
                  value={form.tel} onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-field">
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email"
                placeholder="votre@email.com"
                value={form.email} onChange={handleChange}
                required
              />
            </div>
            <div className="modal-field">
              <label htmlFor="message">Votre demande</label>
              <textarea
                id="message" name="message"
                placeholder="Dates souhaitées, nombre de personnes, type de chambre…"
                value={form.message} onChange={handleChange}
                required
              />
            </div>

            {status === "error" && (
              <p className="modal-error">Une erreur est survenue, veuillez réessayer.</p>
            )}

            <button type="submit" className="modal-submit" disabled={status === "sending"}>
              {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
