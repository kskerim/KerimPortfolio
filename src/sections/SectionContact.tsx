import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export function SectionContact() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showShooting, setShowShooting] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [formSpotlight, setFormSpotlight] = useState({ x: 72, y: 18 });

  const spotlightStyle = {
    '--spot-x': `${formSpotlight.x}%`,
    '--spot-y': `${formSpotlight.y}%`
  } as React.CSSProperties;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    
    // ajouter les champs formsubmit
    data.append('_subject', 'Nouveau message depuis votre portfolio');
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    
    setFormData(data);
    setShowConfirmation(true);
  };

  const confirmSend = async () => {
    if (!formData) return;
    
    setShowConfirmation(false);
    setShowShooting(true);

    // envoyer le formulaire
    try {
      await fetch('https://formsubmit.co/KerimKsKc7@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      // attendre la fin de l'animation (7s pour la fée)
      setTimeout(() => {
        setShowShooting(false);
        // scroll puis redirection
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          window.location.href = '/?success=true';
        }, 800);
      }, 7000);
    } catch (error) {
      setShowShooting(false);
      alert('Erreur lors de l\'envoi du message');
    }
  };

  const cancelSend = () => {
    setShowConfirmation(false);
    setFormData(null);
  };

  const handleFormMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setFormSpotlight({ x, y });
  };

  const handleFormMouseLeave = () => {
    setFormSpotlight({ x: 72, y: 18 });
  };

  return (
    <section id="contact" className="section section-contact section-centre">
      <h2 className="titre-section">Contactez-moi</h2>
      <p className="intro-contact">Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets et idées.</p>
      
      <div className="grille-contact">
        {/* Carte infos */}
        <div className="carte-contact infos">
          <h3>Informations de contact</h3>

          <div className="contact-hero">
            <div className="contact-hero-top">
              <span className="contact-chip contact-chip-live">Disponible</span>
            </div>
            <div className="contact-hero-main">
              <strong>Kerim Kasikci</strong>
              <span>Développeur web • Paris · Hybride</span>
            </div>
          </div>

          <ul className="liste-infos-contact">
            <li>
              <span className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <div>
                <span className="label-info">Email</span>
                <a href="mailto:KerimKsKc7@gmail.com" className="valeur-info">KerimKsKc7@gmail.com</a>
              </div>
            </li>
            <li>
              <span className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1z" />
                </svg>
              </span>
              <div>
                <span className="label-info">Téléphone</span>
                <a href="tel:+33782729917" className="valeur-info">07 82 72 99 17</a>
              </div>
            </li>
            <li>
              <span className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M5 10c0 4.5 4 9 7 11 3-2 7-6.5 7-11a7 7 0 1 0-14 0z" />
                </svg>
              </span>
              <div>
                <span className="label-info">Localisation</span>
                <span className="valeur-info">Paris, France</span>
              </div>
            </li>
          </ul>

          <div className="reseaux">
            <p className="reseaux-titre">Retrouvez-moi sur</p>
            <div className="reseaux-pills">
              <a className="reseau-pill" href="https://github.com/kskerim" target="_blank" rel="noreferrer">
                <span className="reseau-pill-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.772 8.207 11.366.6.111.793-.261.793-.579 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.096.823 2.21 0 1.595-.015 2.878-.015 3.268 0 .321.19.694.8.576C20.565 22.268 24 17.79 24 12.5 24 5.87 18.627.5 12 .5z"/></svg>
                </span>
                <span className="reseau-pill-text">
                  <strong>GitHub</strong>
                  <small>kskerim</small>
                </span>
              </a>
              <a className="reseau-pill" href="https://www.linkedin.com/in/kerim-kasikci-959524226/" target="_blank" rel="noreferrer">
                <span className="reseau-pill-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.45 0H3.55A3.55 3.55 0 0 0 0 3.55v16.9A3.55 3.55 0 0 0 3.55 24h16.9A3.55 3.55 0 0 0 24 20.45V3.55A3.55 3.55 0 0 0 20.45 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.48a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68h-3.56V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.32 2.4 4.32 5.52v6.22z"/></svg>
                </span>
                <span className="reseau-pill-text">
                  <strong>LinkedIn</strong>
                  <small>Kerim Kasikci</small>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Carte formulaire */}
        <div
          className="carte-contact formulaire spotlight-form"
          onMouseMove={handleFormMouseMove}
          onMouseLeave={handleFormMouseLeave}
          style={spotlightStyle}
        >
          <h3>Envoyez-moi un message</h3>
          <div className="contact-hero contact-hero-form">
            <div className="contact-hero-top">
              <span className="contact-chip">Contact</span>
            </div>
            <div className="contact-hero-main">
              <strong>Un projet en tête ?</strong>
              <span>Contactez-moi si vous êtes intéressé, je vous répondrai avec plaisir.</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form-contact">
            <div className="ligne-champs deux">
              <div className="champ">
                <label htmlFor="nom">Nom</label>
                <input id="nom" name="nom" type="text" autoComplete="name" placeholder="Votre nom" required />
              </div>
              <div className="champ">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" placeholder="vous@exemple.com" required />
              </div>
            </div>
            <div className="champ">
              <label htmlFor="sujet">Sujet</label>
              <input id="sujet" name="sujet" type="text" placeholder="Sujet du message" required />
            </div>
            <div className="champ">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Votre message..." required></textarea>
            </div>
            <div className="actions-form">
              <button type="submit" className="btn-accent large"><span>Envoyer le message</span></button>
            </div>
          </form>
        </div>
      </div>

      {/* Modale de confirmation */}
      {showConfirmation && createPortal(
        <div className="modale-overlay" onClick={cancelSend}>
          <div className="modale-confirmation" onClick={(e) => e.stopPropagation()}>
            <h3>Confirmer l'envoi</h3>
            <p>Voulez-vous vraiment envoyer ce message ?</p>
            <div className="modale-actions">
              <button className="btn-annuler" onClick={cancelSend}>Annuler</button>
              <button className="btn-confirmer" onClick={confirmSend}>Confirmer</button>
            </div>
          </div>
        </div>,
        document.documentElement
      )}

      {/* Animation étoile filante */}
      {showShooting && createPortal(
        <div className="shooting-star-overlay">
          <div className="shooting-star"></div>
        </div>,
        document.documentElement
      )}
    </section>
  );
}
