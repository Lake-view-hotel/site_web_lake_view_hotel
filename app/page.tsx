"use client";
import "./page.css";
import { useEffect, useState } from "react";
import ReservationModal from "@/components/ReservationModal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-mosaic">
          <div className="mosaic-cell mosaic-main">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060501/lake-view-hotel_pisicne_2_l5gixk.jpg"
              alt="Piscine Lake View Hôtel Ampefy"
              loading="eager"
            />
          </div>
          <div className="mosaic-cell mosaic-tr">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060500/lake-view-hotel_table_ext%C3%A9rieur_gxp3tv.jpg"
              alt="Terrasse extérieure"
              loading="eager"
            />
          </div>
          <div className="mosaic-cell mosaic-br">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060500/lake-view-hotel_chambre_1_i47bvz.jpg"
              alt="Chambre Lake View Hôtel"
              loading="eager"
            />
          </div>
        </div>
        <div className="hero-vignette" />
        <div className="hero-vignette-bottom" />
        <div className="hero-content">
          <div className="loc-above">Ampefy · Madagascar</div>
          <h1 className="hero-title">
            Un havre de paix<br />au bord du <em>lac</em>
          </h1>
        </div>
      </section>

      {/* ─── À PROPOS ─── */}
      <section className="about" id="apropos">
        <div className="about-left">
          <div className="section-label reveal">À propos</div>
          <h2 className="section-title reveal reveal-delay-1">
            Lake View Hôtel<br /><em>Ampefy</em>
          </h2>
          <div className="sep-gold" />
          <p className="section-body reveal reveal-delay-2">
            Niché sur les rives du lac d&apos;Ampefy, notre hôtel vous accueille dans un cadre naturel exceptionnel.
            À seulement quelques heures de Tananarive, laissez-vous envelopper par la sérénité des hauts plateaux
            malgaches, le souffle du vent sur l&apos;eau et la douceur d&apos;un accueil authentique.
          </p>
          <p className="section-body reveal reveal-delay-2" style={{ marginTop: "16px" }}>
            Conçu pour le repos et la découverte, Lake View Hôtel propose des espaces de vie ouverts sur la nature,
            une piscine à débordement face au lac, et un restaurant en terrasse où la cuisine locale rencontre l&apos;élégance.
          </p>
          <div className="about-stats reveal reveal-delay-3">
            <div className="about-stat">
              <div className="stat-n">3</div>
              <div className="stat-l">Types de chambres</div>
            </div>
            <div className="about-stat">
              <div className="stat-n">★ 4.9</div>
              <div className="stat-l">Satisfaction client</div>
            </div>
            <div className="about-stat">
              <div className="stat-n">4</div>
              <div className="stat-l">Activités proposées</div>
            </div>
            <div className="about-stat">
              <div className="stat-n">∞</div>
              <div className="stat-l">Vue sur le lac</div>
            </div>
          </div>
        </div>
        <div className="about-img reveal reveal-delay-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060500/lake-view-hotel-batiments_chambre_1_gh6xkj.jpg"
            alt="Hôtel Lake View Ampefy"
          />
        </div>
      </section>

      <div className="divider" />

      {/* ─── CHAMBRES ─── */}
      <section className="chambres" id="chambres">
        <div className="chambres-header">
          <div>
            <div className="section-label reveal">Nos chambres</div>
            <h2 className="section-title reveal reveal-delay-1">
              Découvrez nos chambres<br /><em>tout confort</em>
            </h2>
          </div>
          <p className="section-body reveal reveal-delay-2" style={{ maxWidth: "340px", textAlign: "right" }}>
            Trois univers distincts, pensés pour votre bien-être et votre intimité, chacun ouvert sur la beauté du lac.
          </p>
        </div>
        <div className="chambres-grid">
          <div className="chambre-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060500/lake-view-hotel_chambre_1_i47bvz.jpg"
              alt="Chambre Double"
            />
            <div className="chambre-info">
              <div className="chambre-type">Chambre</div>
              <div className="chambre-name">Double</div>
              <div className="chambre-features">
                <span className="chambre-feat">Lit queen size</span>
                <span className="chambre-feat">Salle de bain</span>
                <span className="chambre-feat">Terrasse avec vue sur le lac</span>
              </div>
            </div>
          </div>
          <div className="chambre-card reveal reveal-delay-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060501/lake-view-hotel_chambre_triple_3_fvwc4k.jpg"
              alt="Chambre Triple"
            />
            <div className="chambre-info">
              <div className="chambre-type">Chambre</div>
              <div className="chambre-name">Triple</div>
              <div className="chambre-features">
                <span className="chambre-feat">Lit queen size + canapé</span>
                <span className="chambre-feat">Bain ou douche italienne</span>
                <span className="chambre-feat">Terrasse privée</span>
              </div>
            </div>
          </div>
          <div className="chambre-card reveal reveal-delay-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060500/lake-view-hotel_chambre_familiale_1_wv1vld.jpg"
              alt="Suite Familiale"
            />
            <div className="chambre-info">
              <div className="chambre-type">Suite</div>
              <div className="chambre-name">Familiale</div>
              <div className="chambre-features">
                <span className="chambre-feat">Duplex avec terrasse</span>
                <span className="chambre-feat">Rez-de-chaussée : grand lit et salle de bain</span>
                <span className="chambre-feat">Étage : 2 lits et canapé-lit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── ACTIVITÉS ─── */}
      <section className="activites" id="activites">
        <div className="activites-inner">
          <div>
            <div className="section-label reveal">Nos activités</div>
            <h2 className="section-title reveal reveal-delay-1">
              Explorez<br /><em>Ampefy</em>
            </h2>
            <div className="sep-gold" />
            <p className="section-body reveal reveal-delay-2">
              Entre lac, volcans et hauts plateaux, Ampefy offre un cadre naturel unique pour se ressourcer
              et découvrir Madagascar autrement.
            </p>
            <div className="activite-list">
              <div className="activite-item reveal reveal-delay-2">
                <span className="activite-num">01</span>
                <div>
                  <div className="activite-name">Excursion en pirogue</div>
                  <div className="activite-desc">Partez à la découverte du lac et de ses îlots volcaniques au coucher du soleil.</div>
                </div>
              </div>
              <div className="activite-item reveal reveal-delay-3">
                <span className="activite-num">02</span>
                <div>
                  <div className="activite-name">Randonnée aux chutes</div>
                  <div className="activite-desc">Accédez aux cascades de la Lily, à quelques kilomètres de l&apos;hôtel.</div>
                </div>
              </div>
              <div className="activite-item reveal reveal-delay-4">
                <span className="activite-num">03</span>
                <div>
                  <div className="activite-name">Piscine face au lac</div>
                  <div className="activite-desc">Détendez-vous dans notre piscine à débordement avec vue imprenable.</div>
                </div>
              </div>
              <div className="activite-item reveal reveal-delay-5">
                <span className="activite-num">04</span>
                <div>
                  <div className="activite-name">Espaces de jeux</div>
                  <div className="activite-desc">Aire de jeux et activités pour toute la famille dans les jardins de l&apos;hôtel.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="activites-img reveal reveal-delay-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060500/lake-view-hotel_air-de-jeux_rpwqvp.jpg"
              alt="Aire de jeux Lake View Hôtel"
            />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── RESTAURANT ─── */}
      <section className="restaurant" id="restaurant">
        <div className="restaurant-inner">
          <div className="restaurant-imgs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060501/lake-view-hotel_salle_%C3%A0_manger_principale-1_os4e1u.jpg"
              alt="Salle à manger Lake View Hôtel"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1781612600/lake_view_hotel_cordon_bleu_avec_frites_cs0fkx.jpg"
              alt="Cordon bleu Lake View Hôtel"
            />
          </div>
          <div className="restaurant-content">
            <div className="section-label reveal">Le restaurant</div>
            <h2 className="section-title reveal reveal-delay-1">
              Une cuisine<br /><em>ouverte sur le lac</em>
            </h2>
            <div className="sep-gold" />
            <p className="section-body reveal reveal-delay-2">
              Notre terrasse panoramique accueille petit-déjeuner, déjeuner et dîner dans un cadre unique.
              Cuisine malgache revisitée, produits frais du terroir, et carte des vins soigneusement sélectionnée.
            </p>
            <div className="restaurant-menu reveal reveal-delay-3">
              <div className="menu-item">
                <div>
                  <div className="menu-name">Cordon bleu</div>
                  <div className="menu-desc">Pané maison, sauce crémeuse, frites</div>
                </div>
                <div className="menu-price">28 000 Ar</div>
              </div>
              <div className="menu-item">
                <div>
                  <div className="menu-name">Soupe garnie</div>
                  <div className="menu-desc">Œuf, poulet grillé, boulettes de zébu</div>
                </div>
                <div className="menu-price">22 000 Ar</div>
              </div>
              <div className="menu-item">
                <div>
                  <div className="menu-name">Tilapia grillé</div>
                  <div className="menu-desc">Poisson du lac, pommes de terre sautées</div>
                </div>
                <div className="menu-price">28 000 Ar</div>
              </div>
              <div className="menu-item">
                <div>
                  <div className="menu-name">Mousseline d&apos;avocat</div>
                  <div className="menu-desc">Avocat frais, croûtons, pain grillé</div>
                </div>
                <div className="menu-price">18 000 Ar</div>
              </div>
            </div>
            <a href="/Lake%20View%20H%C3%B4tel%20%E2%80%94%20Cartes%20Menu-1.pdf" target="_blank" rel="noopener noreferrer" className="btn-carte reveal reveal-delay-4">Voir la carte</a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── CONTACT ─── */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div>
            <div className="section-label reveal">Nous contacter</div>
            <h2 className="section-title reveal reveal-delay-1">
              Planifiez<br /><em>votre séjour</em>
            </h2>
            <div className="sep-gold" />
            <p className="section-body reveal reveal-delay-2">
              Notre équipe est disponible pour répondre à toutes vos questions et organiser votre séjour
              dans les moindres détails.
            </p>
            <div className="contact-info reveal reveal-delay-3">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="#b08d5a" strokeWidth="1.2">
                    <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">contact@lakeviewhotel.mg</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="#b08d5a" strokeWidth="1.2">
                    <path d="M3 2h3l1.5 3.5-1.5 1a7 7 0 003.5 3.5l1-1.5L14 10v3a1 1 0 01-1 1C6 14 2 10 2 3a1 1 0 011-1z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Téléphone / Whatsapp</div>
                  <div className="contact-value">+261 38 10 786 21</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 16 16" fill="none" stroke="#b08d5a" strokeWidth="1.2">
                    <circle cx="8" cy="7" r="2.5" />
                    <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Adresse</div>
                  <div className="contact-value">Ampefy, Madagascar</div>
                </div>
              </div>
            </div>
            <button className="btn-reserve reveal reveal-delay-4" onClick={() => setModalOpen(true)}>Réserver un séjour</button>
          </div>
          <div className="contact-map reveal reveal-delay-3">
            <iframe
              src="https://maps.google.com/maps?q=Ampefy+Madagascar&t=&z=14&ie=UTF8&iwloc=&output=embed"
              title="Lake View Hôtel – Ampefy, Madagascar"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {modalOpen && <ReservationModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
