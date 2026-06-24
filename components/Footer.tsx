export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/dnz6gt3yr/image/upload/v1780060501/logo_lake_view_hotel_V2_jo0ygy.webp"
              alt="Lake View Hôtel Ampefy"
              className="footer-logo-img"
            />
          </div>
          <p className="footer-tagline">
            Un havre de paix niché sur les rives du lac d&apos;Ampefy, au cœur des hauts plateaux malgaches.
          </p>
        </div>

        <div className="footer-links-row">
          <a href="#apropos">À propos</a>
          <a href="#chambres">Nos chambres</a>
          <a href="#activites">Nos activités</a>
          <a href="#restaurant">Le restaurant</a>
          <a href="#contact">Contacts</a>
          <a href="#" className="footer-social-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Facebook
          </a>
          <a href="#" className="footer-social-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-big">Lake View Hotel</div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2025 Lake View Hôtel · Ampefy, Madagascar</span>
        <span className="footer-copy">Tous droits réservés</span>
        <span className="footer-copy">
          Réalisé par <a href="https://oxmad-digital.mg" target="_blank" rel="nofollow noopener noreferrer" className="footer-oxmad">Oxmad Digital</a>
        </span>
        <span className="footer-copy"><a href="#">Mentions légales</a></span>
      </div>
    </footer>
  );
}
