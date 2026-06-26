import "./mentions-legales.css";

export default function MentionsLegalesPage() {
  return (
    <section className="mentions-section">
      <div className="mentions-wrapper">
        <div className="mentions-inner">
          <a href="/" className="mentions-back">← Retour à l&apos;accueil</a>
          <h1>Mentions Légales</h1>
          <div className="mentions-sep" />

          <div className="mentions-block">
            <div className="mentions-title-wrapper">
              <h2>1. Éditeur du site</h2>
            </div>
            <div className="mentions-content-wrapper">
              <p><strong>Raison sociale :</strong> [NOM LÉGAL DE L&apos;ÉTABLISSEMENT]</p>
              <p><strong>Forme juridique :</strong> [FORME JURIDIQUE — ex : SARL, Entreprise Individuelle…]</p>
              <p><strong>Numéro d&apos;immatriculation :</strong> [NUMÉRO NIF / STAT / RCS]</p>
              <p><strong>Siège social :</strong> [ADRESSE COMPLÈTE], Ampefy, Madagascar</p>
              <p><strong>Téléphone :</strong> +261 38 10 786 21</p>
              <p><strong>Email :</strong> [ADRESSE EMAIL DE CONTACT]</p>
            </div>
          </div>

          <div className="mentions-block">
            <div className="mentions-title-wrapper">
              <h2>2. Responsable de la publication</h2>
            </div>
            <div className="mentions-content-wrapper">
              <p><strong>Nom :</strong> [PRÉNOM NOM DU RESPONSABLE]</p>
              <p><strong>Qualité :</strong> [FONCTION — ex : Gérant, Directeur…]</p>
              <p><strong>Contact :</strong> [ADRESSE EMAIL DU RESPONSABLE]</p>
            </div>
          </div>

          <div className="mentions-block">
            <div className="mentions-title-wrapper">
              <h2>3. Conception et développement</h2>
            </div>
            <div className="mentions-content-wrapper">
              <p>Ce site a été conçu et développé par <strong>Oxmad Digital</strong>.</p>
              <p>Site web : <a href="https://oxmad-digital.mg" target="_blank" rel="nofollow noopener noreferrer">oxmad-digital.mg</a></p>
            </div>
          </div>

          <div className="mentions-block">
            <div className="mentions-title-wrapper">
              <h2>4. Hébergement</h2>
            </div>
            <div className="mentions-content-wrapper">
              <p>Le site est hébergé par : <strong>Vercel Inc.</strong></p>
              <p>Adresse : 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p>Site web : <a href="https://www.vercel.com" target="_blank" rel="noopener noreferrer">www.vercel.com</a></p>
            </div>
          </div>

          <div className="mentions-block">
            <div className="mentions-title-wrapper">
              <h2>5. Propriété intellectuelle</h2>
            </div>
            <div className="mentions-content-wrapper">
              <p>L&apos;ensemble des contenus présents sur ce site (textes, photographies, logos, éléments graphiques, etc.) est la propriété exclusive de [NOM LÉGAL DE L&apos;ÉTABLISSEMENT], sauf mention contraire.</p>
              <p>Toute reproduction, représentation ou diffusion, même partielle, sans autorisation écrite préalable est strictement interdite.</p>
            </div>
          </div>

          <div className="mentions-block">
            <div className="mentions-title-wrapper">
              <h2>6. Protection des données personnelles</h2>
            </div>
            <div className="mentions-content-wrapper">
              <p>Les données personnelles collectées via les formulaires du site (nom, téléphone, email, dates de séjour) sont utilisées exclusivement pour traiter les demandes de réservation et répondre aux messages des visiteurs.</p>
              <p>Elles ne sont jamais revendues ni transmises à des tiers à des fins commerciales.</p>
              <p>Conformément à la réglementation en vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : <strong>[ADRESSE EMAIL DE CONTACT]</strong></p>
            </div>
          </div>

          <div className="mentions-block">
            <div className="mentions-title-wrapper">
              <h2>7. Cookies</h2>
            </div>
            <div className="mentions-content-wrapper">
              <p>Ce site peut utiliser des cookies à des fins d&apos;analyse d&apos;audience et d&apos;amélioration de la navigation. Aucun cookie publicitaire ou de traçage tiers n&apos;est utilisé.</p>
              <p>Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.</p>
            </div>
          </div>

          <div className="mentions-block">
            <div className="mentions-title-wrapper">
              <h2>8. Responsabilité</h2>
            </div>
            <div className="mentions-content-wrapper">
              <p>L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Cependant, il ne saurait être tenu responsable des erreurs, omissions ou indisponibilités du service.</p>
              <p>Les tarifs et disponibilités affichés sont donnés à titre indicatif et peuvent être modifiés sans préavis.</p>
            </div>
          </div>

          <div className="mentions-block">
            <div className="mentions-title-wrapper">
              <h2>9. Droit applicable</h2>
            </div>
            <div className="mentions-content-wrapper">
              <p>Les présentes mentions légales sont régies par le droit malgache. Tout litige relatif à l&apos;utilisation de ce site sera soumis à la compétence exclusive des tribunaux de [VILLE — ex : Antananarivo], Madagascar.</p>
            </div>
          </div>

          <p className="mentions-date">Dernière mise à jour : juin 2026</p>
        </div>
      </div>
    </section>
  );
}
