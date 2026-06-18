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
