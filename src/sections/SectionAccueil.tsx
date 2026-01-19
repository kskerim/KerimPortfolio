import React from 'react';
import { FaGithub } from 'react-icons/fa';

export function SectionAccueil() {
  return (
    <section id="accueil" className="section pleine-hauteur section-accueil">
      <div className="contenu">
        <div className="badge-disponibilite">
          <span className="badge-point"></span>
          <span className="badge-texte">Disponible pour une alternance</span>
          <span className="badge-sparkles">
            <span className="sparkle s1">✦</span>
            <span className="sparkle s2">✦</span>
            <span className="sparkle s3">✦</span>
          </span>
        </div>
        <h1 className="titre-hero">Kerim Kasikci</h1>
        <p className="sous-titre">Étudiant Mastère Ingénierie du Web (ESGI)</p>
        <p className="intro">Développeur Full-stack.</p>
        <a 
          href="https://github.com/kskerim" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="lien-github-hero"
        >
          <FaGithub className="icone-github" />
          <span className="texte-github">
            <span className="ligne1">Voir mes projets</span>
            <span className="ligne2">Voici mon GitHub en attendant que mon portfolio se termine</span>
          </span>
        </a>
      </div>
    </section>
  );
}
