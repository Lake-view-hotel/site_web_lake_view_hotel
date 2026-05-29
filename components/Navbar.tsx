"use client";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <a className="nav-logo" href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060501/logo_lake_view_hotel_V2_jo0ygy.webp"
          alt="Lake View Hôtel Ampefy"
          className="logo-img"
        />
      </a>

      <ul className="nav-links">
        <li><a href="#apropos">À propos</a></li>
        <li><a href="#chambres">Chambres</a></li>
        <li><a href="#activites">Activités</a></li>
        <li><a href="#restaurant">Restaurant</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <button className="nav-reserve">Réserver</button>

      <button
        className="nav-hamburger"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        <svg viewBox="0 0 22 22" fill="none" stroke="var(--cream)" strokeWidth="1.5" width="22" height="22">
          {open ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="nav-mobile">
          <a href="#apropos" onClick={() => setOpen(false)}>À propos</a>
          <a href="#chambres" onClick={() => setOpen(false)}>Chambres</a>
          <a href="#activites" onClick={() => setOpen(false)}>Activités</a>
          <a href="#restaurant" onClick={() => setOpen(false)}>Restaurant</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contacts</a>
          <a href="#contact" className="nav-mobile-reserve" onClick={() => setOpen(false)}>Réserver</a>
        </div>
      )}
    </nav>
  );
}
