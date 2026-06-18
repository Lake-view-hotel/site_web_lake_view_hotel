"use client";
import { useEffect, useState } from "react";
import "./ReservationModal.css";

interface Props {
  onClose: () => void;
}

const CHAMBRES = [
  "Chambre Double",
  "Chambre Triple",
  "Suite Familiale",
];

export default function ReservationModal({ onClose }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    nom: "", email: "", tel: "",
    chambre: "", personnes: "", arrivee: "", depart: "",
    message: "",
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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

        <div className="modal-label">Demande de réservation</div>
        <h2 className="modal-title">Planifiez votre<br /><em>séjour</em></h2>
        <div className="modal-sep" />
        <p className="modal-notice">
          Cette demande sera traitée par notre équipe et confirmée sous réserve des disponibilités.
          Nous vous contacterons dans les plus brefs délais.
        </p>

        {status === "success" ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <svg viewBox="0 0 20 20" fill="none" stroke="#b08d5a" strokeWidth="1.4" width="22" height="22">
                <polyline points="4 10 8 14 16 6" />
              </svg>
            </div>
            <h3 className="modal-title" style={{ fontSize: "22px", marginBottom: "12px" }}>
              Demande envoyée
            </h3>
            <p>
              Votre demande a bien été reçue. Notre équipe reviendra vers vous rapidement
              pour confirmer la disponibilité et finaliser votre séjour.
            </p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="modal-row">
              <div className="modal-field">
                <label htmlFor="nom">Nom complet</label>
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

            <div className="modal-row">
              <div className="modal-field">
                <label htmlFor="chambre">Type de chambre</label>
                <select id="chambre" name="chambre" value={form.chambre} onChange={handleChange} required>
                  <option value="" disabled>Sélectionner…</option>
                  {CHAMBRES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="modal-field">
                <label htmlFor="personnes">Nombre de personnes</label>
                <select id="personnes" name="personnes" value={form.personnes} onChange={handleChange} required>
                  <option value="" disabled>Sélectionner…</option>
                  {[1,2,3,4,5,6].map((n) => (
                    <option key={n} value={n}>{n} personne{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="modal-row">
              <div className="modal-field">
                <label htmlFor="arrivee">Date d&apos;arrivée</label>
                <input
                  id="arrivee" name="arrivee" type="date"
                  value={form.arrivee} onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <div className="modal-field">
                <label htmlFor="depart">Date de départ</label>
                <input
                  id="depart" name="depart" type="date"
                  value={form.depart} onChange={handleChange}
                  min={form.arrivee || new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
            </div>

            <div className="modal-field">
              <label htmlFor="message">Message <span className="modal-optional">(optionnel)</span></label>
              <textarea
                id="message" name="message"
                placeholder="Demandes particulières, informations complémentaires…"
                value={form.message} onChange={handleChange}
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
