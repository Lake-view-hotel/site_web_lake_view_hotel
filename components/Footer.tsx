export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <div className="logo-mark">
              <svg viewBox="0 0 26 26" fill="none">
                <ellipse cx="13" cy="16" rx="9" ry="5.5" stroke="#b08d5a" strokeWidth="1" fill="none" />
                <path d="M4 16 Q13 7 22 16" stroke="#b08d5a" strokeWidth="1" fill="none" />
                <line x1="13" y1="4" x2="13" y2="9.5" stroke="#b08d5a" strokeWidth="1" />
                <circle cx="13" cy="3.5" r="1.5" fill="#b08d5a" />
              </svg>
            </div>
            <div className="logo-text">
              Lake View <span className="logo-sub">Hôtel · Ampefy</span>
            </div>
          </div>
          <p className="footer-tagline">
            Un havre de paix niché sur les rives du lac d&apos;Ampefy, au cœur des hauts plateaux malgaches.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Navigation</div>
          <div className="footer-nav-links">
            <a href="#apropos">À propos</a>
            <a href="#chambres">Nos chambres</a>
            <a href="#activites">Nos activités</a>
            <a href="#restaurant">Le restaurant</a>
            <a href="#contact">Contacts</a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Informations</div>
          <div className="footer-nav-links">
            <a href="#">Tarifs &amp; disponibilités</a>
            <a href="#">Politique d&apos;annulation</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Suivez-nous</div>
          <div className="footer-nav-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-big">Lake View Hotel</div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2025 Lake View Hôtel · Ampefy, Madagascar</span>
        <span className="footer-copy">Tous droits réservés</span>
      </div>
    </footer>
  );
}
