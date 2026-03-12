import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type TypeProjet = 'web' | 'jeux';

interface LienProjet {
  url: string;
  label: string;
  icone: 'site' | 'github';
}

interface Projet {
  titre: string;
  sousTitre: string;
  description: string;
  role: string;
  tags: string[];
  liens: LienProjet[];
  points?: string[];
  image: string;
  type: TypeProjet;
}

const projets: Projet[] = [
  /* ── Sites & applications web ── */
  {
    type: 'web',
    titre: 'MétéoWeb',
    sousTitre: 'Application météo complète et moderne',
    description: 'Application météo interactive avec carte de France, recherche de villes, prévisions horaires et 7 jours, système de favoris et thème clair/sombre.',
    role: 'Développeur Full-stack',
    image: '/images/projets/meteoweb.png',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Recharts', 'Zod', 'Vitest', 'PWA'],
    liens: [
      { url: 'https://meteoweb-ashy.vercel.app', label: 'Voir le site', icone: 'site' },
      { url: 'https://github.com/kskerim/meteoweb', label: 'GitHub', icone: 'github' }
    ],
    points: [
      'Carte interactive avec températures en temps réel',
      'Prévisions horaires 48 h avec graphiques Recharts',
      'PWA installable, favoris, unités configurables',
      'CI/CD GitHub Actions, tests Vitest & Playwright'
    ]
  },
  {
    type: 'web',
    titre: 'Asso. Professeurs d\'Italien',
    sousTitre: 'Refonte du site de l\'APIRP en React',
    description: 'Refonte complète du site de l\'Association des Professeurs d\'Italien de la Région Parisienne : pages dynamiques, forum, actualités et activités culturelles.',
    role: 'Développeur React',
    image: '/images/projets/sae401.png',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Create React App'],
    liens: [
      { url: 'https://sae-401-eight.vercel.app', label: 'Voir le site', icone: 'site' },
      { url: 'https://github.com/kskerim/SAE-401', label: 'GitHub', icone: 'github' }
    ],
    points: [
      'Pages Accueil, Forum, Activités, Promouvoir',
      'Contenu éditorial structuré avec actualités',
      'Projet universitaire réalisé en binôme'
    ]
  },
  {
    type: 'web',
    titre: 'Pokédex 151',
    sousTitre: 'Encyclopédie des 151 premiers Pokémon',
    description: 'Application web listant les 151 Pokémon originaux avec fiches détaillées, navigation fluide et pipeline CI/CD complet.',
    role: 'Développeur front-end',
    image: '/images/projets/pokedex.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'Webpack', 'Jest', 'ESLint', 'GitHub Actions'],
    liens: [
      { url: 'https://full-stack-open-pokedex-steel.vercel.app', label: 'Voir le site', icone: 'site' },
      { url: 'https://github.com/kskerim/full-stack-open-pokedex', label: 'GitHub', icone: 'github' }
    ],
    points: [
      'Liste complète avec sprites et détails par Pokémon',
      'Pipeline CI/CD GitHub Actions (lint, test, deploy)',
      'Basé sur le cours Full Stack Open (Université d\'Helsinki)'
    ]
  },

  /* ── Mini-jeux ── */
  {
    type: 'jeux',
    titre: 'Casse-Briques',
    sousTitre: 'Brick Breaker arcade rétro',
    description: 'Jeu de casse-briques complet avec 636 briques par niveau, système de bonus, vies, niveaux progressifs et architecture orientée objet.',
    role: 'Développeur front-end',
    image: '/images/projets/casse-briques.png',
    tags: ['JavaScript', 'HTML5 Canvas', 'HTML', 'CSS', 'OOP'],
    liens: [
      { url: 'https://casse-briques-murex.vercel.app', label: 'Jouer', icone: 'site' },
      { url: 'https://github.com/kskerim/Casse-Briques', label: 'GitHub', icone: 'github' }
    ],
    points: [
      '636 briques par niveau, niveaux progressifs',
      '12+ types de bonus (multi-balle, laser, agrandissement…)',
      'Architecture OOP : Ball, Paddle, Brick, Bonus, GameManager'
    ]
  },
  {
    type: 'jeux',
    titre: 'Blob Merge',
    sousTitre: 'Jeu d\'absorption avec génération procédurale',
    description: 'Contrôlez un blob et absorbez les plus petits pour grandir. Génération procédurale d\'ennemis, Web Audio API pour les effets sonores et UI glassmorphism.',
    role: 'Développeur front-end',
    image: '/images/projets/blob.png',
    tags: ['JavaScript', 'HTML5 Canvas', 'Web Audio API', 'HTML', 'CSS'],
    liens: [
      { url: 'https://blob-jeu.vercel.app', label: 'Jouer', icone: 'site' },
      { url: 'https://github.com/kskerim/Blob-Jeu', label: 'GitHub', icone: 'github' }
    ],
    points: [
      'Génération procédurale d\'ennemis en temps réel',
      'Effets sonores dynamiques via Web Audio API',
      'Interface glassmorphism, responsive et mobile'
    ]
  },
  {
    type: 'jeux',
    titre: 'Snake',
    sousTitre: 'Le classique revisité en HTML5',
    description: 'Jeu du serpent classique avec contrôles clavier et souris/tactile, score et meilleur score sauvegardé, design responsive.',
    role: 'Développeur front-end',
    image: '/images/projets/snake.png',
    tags: ['JavaScript', 'HTML5 Canvas', 'HTML', 'CSS'],
    liens: [
      { url: 'https://snake-jeu.vercel.app', label: 'Jouer', icone: 'site' },
      { url: 'https://github.com/kskerim/Snake-Jeu', label: 'GitHub', icone: 'github' }
    ],
    points: [
      'Contrôles clavier + souris/tactile',
      'Score persistant avec meilleur score',
      'Game over avec relance instantanée (R ou clic)'
    ]
  },
  {
    type: 'jeux',
    titre: 'Morpion',
    sousTitre: 'Tic-Tac-Toe classique',
    description: 'Jeu de morpion pour deux joueurs en local, avec détection automatique de victoire et possibilité de recommencer.',
    role: 'Développeur front-end',
    image: '/images/projets/morpion.png',
    tags: ['JavaScript', 'HTML', 'CSS'],
    liens: [
      { url: 'https://morpion-tic-tac-toe.vercel.app', label: 'Jouer', icone: 'site' },
      { url: 'https://github.com/kskerim/Morpion-TicTacToe', label: 'GitHub', icone: 'github' }
    ]
  },
  {
    type: 'jeux',
    titre: 'CPS Test',
    sousTitre: 'Test de clics par seconde',
    description: 'Mesurez votre vitesse de clic en 6 secondes. Score final affiché avec popup et possibilité de recommencer.',
    role: 'Développeur front-end',
    image: '/images/projets/cps.jpg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    liens: [
      { url: 'https://cps-test-de-clic-par-seconde.vercel.app', label: 'Jouer', icone: 'site' },
      { url: 'https://github.com/kskerim/CPS-TestDeClicParSeconde', label: 'GitHub', icone: 'github' }
    ]
  }
];

const iconeMap = {
  site: FaExternalLinkAlt,
  github: FaGithub
};

export function SectionProjets() {
  const [vue, setVue] = useState<TypeProjet>('web');
  const basculer = () => setVue(vue === 'web' ? 'jeux' : 'web');
  const projetsFiltres = projets.filter(p => p.type === vue);

  return (
    <section id="projets" className="section section-centre section-projets">
      <h2 className="titre-section">Projets</h2>
      <p className="texte-intro-projets">Quelques réalisations classées entre sites & applications web et mini-jeux exploratoires.</p>

      <div className="filtres-projets unique">
        <button
          type="button"
          className="btn-filtre-projet actif"
          onClick={basculer}
          aria-pressed={vue === 'jeux'}
          aria-label={vue === 'web' ? 'Afficher les mini-jeux' : 'Afficher les sites & applications web'}
        >
          <span>{vue === 'web' ? 'Voir Mini-jeux' : 'Voir Sites & Applications'}</span>
        </button>
      </div>

      <div className="zone-projets">
        <div
          key={vue}
          className="grille-projets-v2 liste-projets"
          aria-live="polite"
          aria-label={vue === 'web' ? 'Sites & applications web' : 'Mini-jeux'}
        >
          {projetsFiltres.map((p, idx) => (
            <article key={p.titre} className="carte-projet-v2" tabIndex={0} data-index={idx}>
              <div className="carte-projet-media">
                <img src={p.image} alt={p.titre} loading="lazy" />
                <div className="carte-projet-overlay">
                  {p.liens.map(l => {
                    const Icone = iconeMap[l.icone];
                    return (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="btn-overlay-v2" title={l.label}>
                        <Icone /> {l.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="carte-projet-body">
                <div className="carte-projet-top">
                  <h3 className="titre-projet-v2">{p.titre}</h3>
                  <span className="role-badge">{p.role}</span>
                </div>
                <p className="sous-titre-projet">{p.sousTitre}</p>
                <p className="desc-projet-v2">{p.description}</p>

                {p.points && p.points.length > 0 && (
                  <ul className="points-projet">
                    {p.points.map(pt => <li key={pt}>{pt}</li>)}
                  </ul>
                )}

                <div className="tags-projet-v2">
                  {p.tags.map(t => <span key={t} className="tag-projet-v2">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
