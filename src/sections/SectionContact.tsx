import React from 'react';

export function SectionContact() {
  return (
    <section id="contact" className="section section-contact section-centre">
      <h2 className="titre-section">Contactez-moi</h2>
      <p className="intro-contact">Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets et idées.</p>
      
      <div className="grille-contact">
        {/* Carte infos */}
        <div className="carte-contact infos">
          <h3>Informations de contact</h3>
          <ul className="liste-infos-contact">
            <li>
              <span className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <div>
                <a href="mailto:KerimKsKc7@gmail.com">KerimKsKc7@gmail.com</a>
              </div>
            </li>
            <li>
              <span className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-3 2c1 2 3 4 5 5l2-3 5 2v4c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1z" />
                </svg>
              </span>
              <div>
                <a href="tel:+33782729917">07 82 72 99 17</a>
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
                <span>Sarcelles, France 95200</span>
              </div>
            </li>
          </ul>
          <hr className="divider-contact" />
          <div className="reseaux">
            <h4>Suivez-moi</h4>
            <div className="icones-reseaux">
              <a className="badge-icone" href="https://github.com/kskerim" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.772 8.207 11.366.6.111.793-.261.793-.579 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.096.823 2.21 0 1.595-.015 2.878-.015 3.268 0 .321.19.694.8.576C20.565 22.268 24 17.79 24 12.5 24 5.87 18.627.5 12 .5z"/></svg>
              </a>
              <a className="badge-icone" href="https://www.linkedin.com/in/kerim-kasikci-959524226/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.45 0H3.55A3.55 3.55 0 0 0 0 3.55v16.9A3.55 3.55 0 0 0 3.55 24h16.9A3.55 3.55 0 0 0 24 20.45V3.55A3.55 3.55 0 0 0 20.45 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.48a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.45 20.45h-3.56v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68h-3.56V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.65 0 4.32 2.4 4.32 5.52v6.22z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Carte formulaire */}
        <div className="carte-contact formulaire">
          <h3>Envoyez-moi un message</h3>
          <form action="https://formsubmit.co/KerimKsKc7@gmail.com" method="POST" className="form-contact">
            {/* Configuration FormSubmit */}
            <input type="hidden" name="_subject" value="Nouveau message depuis votre portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:5174/?success=true" />
            <input type="hidden" name="_template" value="table" />
            
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
    </section>
  );
}
