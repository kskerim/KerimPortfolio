import React, { useState } from 'react';

interface Projet {
  titre: string;
  description: string;
  image: string;
  tags: string[];
  lien?: string;
}

const projetsMiniJeux: Projet[] = [
  {
    titre: 'Jeu Mémoire (Cartes)',
    description: 'Petit jeu JavaScript pour entraîner la mémoire avec un système de paires et compteur de coups.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=60',
    tags: ['JavaScript', 'CSS Grid', 'Logic'],
    lien: '#'
  },
  {
    titre: 'Snake Canvas',
    description: 'Implémentation du classique Snake en Canvas avec augmentation progressive de la vitesse.',
    image: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=60',
    tags: ['Canvas', 'Game Loop', 'Vanilla JS'],
    lien: '#'
  },
  {
    titre: 'Click Speed Challenge',
    description: 'Mini-jeu pour mesurer la vitesse de clic avec classement local (localStorage).',
    image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=800&q=60',
    tags: ['TypeScript', 'Performance', 'UX'],
    lien: '#'
  }
];

const projetsPros: Projet[] = [
  {
    titre: 'Dashboard Visualisation de Données',
    description: 'Projet universitaire Full-Stack pour la visualisation de données complexes avec interface interactive.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    lien: '#'
  },
  {
    titre: 'Interface UX/UI Design',
    description: 'Conception d’interfaces utilisateur modernes avec Figma, prototypage et tests d’utilisabilité.',
    image: 'https://images.unsplash.com/photo-1559027615-5c5083b90de1?auto=format&fit=crop&w=800&q=60',
    tags: ['Figma', 'Adobe XD', 'Prototyping', 'UX Research'],
    lien: '#'
  },
  {
    titre: 'Application Mobile Fitness',
    description: 'Suivi d’activités, génération de plans personnalisés et visualisation des progrès.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=800&q=60',
    tags: ['React Native', 'TypeScript', 'API'],
    lien: '#'
  },
  {
    titre: 'Site Événementiel Responsive',
    description: 'Landing page performante avec animations légères et optimisation SEO.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=60',
    tags: ['Vite', 'SEO', 'Accessibility'],
    lien: '#'
  }
];

export function SectionProjets() {
  const [vue, setVue] = useState<'mini' | 'pro'>('pro');
  const basculer = () => setVue(vue === 'pro' ? 'mini' : 'pro');
  return (
    <section id="projets" className="section section-centre section-projets">
      <h2 className="titre-section">Projets</h2>
      <p className="texte-intro-projets">Quelques réalisations classées entre mini-jeux exploratoires et projets plus structurés / académiques.</p>

      <div className="filtres-projets unique">
        <button
          type="button"
          className="btn-filtre-projet actif"
          onClick={basculer}
          aria-pressed={vue === 'mini'}
          aria-label={vue === 'pro' ? 'Afficher les mini-jeux' : 'Afficher les projets professionnels'}
        >
          <span>{vue === 'pro' ? '⇄ Voir Mini‑jeux' : '⇄ Voir Pro / Académiques'}</span>
        </button>
      </div>

      <div className="zone-projets">
        <div
          key={vue}
          className="grille-projets-2col liste-projets"
          aria-live="polite"
          aria-label={vue === 'pro' ? 'Projets professionnels et académiques' : 'Mini-jeux'}
        >
          {(vue === 'mini' ? projetsMiniJeux : projetsPros).map((p, idx) => (
            <article key={p.titre} className="carte-projet-adv" tabIndex={0} data-index={idx}>
              <div className="media-projet">
                <img src={p.image} alt={p.titre} loading="lazy" />
                <div className="overlay-media">
                  <a href={p.lien} className="btn-overlay" aria-label={`Voir le projet ${p.titre}`}>Voir le projet</a>
                </div>
              </div>
              <div className="contenu-projet">
                <h3 className="titre-projet">{p.titre}</h3>
                <p className="desc-projet">{p.description}</p>
                <div className="tags-projet">
                  {p.tags.map(t => <span key={t} className="tag-projet">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
