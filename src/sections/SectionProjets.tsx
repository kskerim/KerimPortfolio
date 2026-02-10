import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaFigma } from 'react-icons/fa';

type TypeProjet = 'pro' | 'jeux';

interface LienProjet {
  url: string;
  label: string;
  icone: 'site' | 'github' | 'figma';
}

interface Projet {
  titre: string;
  sousTitre: string;
  description: string;
  role: string;
  tags: string[];
  liens: LienProjet[];
  points?: string[];
  type: TypeProjet;
}

const projets: Projet[] = [
  /* ─── PRO / ACADÉMIQUES ─── */
  {
    type: 'pro',
    titre: 'MétéoWeb',
    sousTitre: 'Application météo complète et moderne',
    description: 'Application météo construite avec Next.js 16 et l\'API Open-Meteo. Architecture propre, UI soignée et meilleures pratiques de développement.',
    role: 'Développeur Full-stack',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Framer Motion', 'Recharts', 'Zod', 'Vitest', 'PWA'],
    liens: [
      { url: 'https://github.com/kskerim/meteoweb', label: 'GitHub', icone: 'github' }
    ],
    points: [
      'Recherche de villes avec auto-complétion et historique',
      'Prévisions horaires 48h avec graphiques interactifs',
      'Prévisions 7 jours avec lever/coucher du soleil',
      'Système de favoris, unités configurables, thème clair/sombre',
      'PWA installable, fond dynamique selon météo et jour/nuit'
    ]
  },
  {
    type: 'pro',
    titre: 'Pokédex 151',
    sousTitre: 'Site des 151 premiers Pokémon',
    description: 'Conception et développement en groupe du site complet dédié aux 151 premiers Pokémon avec fiches détaillées, filtres et design immersif.',
    role: 'Développeur front-end',
    tags: ['Vite', 'JavaScript', 'JSON', 'Tailwind CSS'],
    liens: [
      { url: 'https://sae-s6.vercel.app/', label: 'Voir le site', icone: 'site' }
    ]
  },
  {
    type: 'pro',
    titre: 'Platopark',
    sousTitre: 'Découverte & réservation de jeux de société',
    description: 'Conception UI/UX d\'un site de découverte et de réservation d\'expériences autour des jeux de société, avec catalogue, fiches détaillées et tunnel de réservation.',
    role: 'UI/UX Designer — Conception Figma : écrans, composants, interactions et prototype de réservation',
    tags: ['Figma', 'UX Research', 'Wireframes', 'Prototypage', 'Architecture info', 'Parcours utilisateur', 'Design System', 'Composants UI'],
    liens: [
      { url: 'https://www.figma.com/design/bVsNHCpmdTT9oSHhd5PA6l/Platopark_Projet_Kerim?node-id=0-1&t=HN4zQtSpVPhEE9Fx-1', label: 'Voir sur Figma', icone: 'figma' }
    ],
    points: [
      'Infos essentielles visibles immédiatement sur les fiches (durée / joueurs / âge)',
      'Tunnel de réservation guidé avec récapitulatif',
      'Réassurance via le récap panier (adresse, participants, total)',
      'Composants UI réutilisables (tabs, cards, chips, boutons, calendrier)',
      'Pensée component-based (React-ready), états d\'interface prévus'
    ]
  },
  {
    type: 'pro',
    titre: 'SweetMetrics',
    sousTitre: 'Comparateur nutritionnel de bonbons',
    description: 'Comparateur de valeurs nutritionnelles et statistiques diverses sur les bonbons avec visualisation de données interactive.',
    role: 'Développeur front-end & data visualization',
    tags: ['JavaScript', 'Chart.js', 'JSON', 'HTML', 'CSS'],
    liens: [
      { url: 'https://sokbc.github.io/SAE303/', label: 'Voir le site', icone: 'site' }
    ]
  },
  {
    type: 'pro',
    titre: 'Association Professeurs d\'Italien',
    sousTitre: 'Refonte du site de l\'association parisienne',
    description: 'Refonte complète d\'un site en React pour l\'Association des Professeurs d\'Italien de la Région Parisienne. Rédaction d\'une charte éditoriale et application de techniques SEO.',
    role: 'Développeur React & rédacteur SEO',
    tags: ['React', 'JavaScript', 'SEO', 'Charte éditoriale', 'Responsive'],
    liens: [
      { url: 'https://sae-401-eight.vercel.app/', label: 'Voir le site', icone: 'site' }
    ],
    points: [
      'Création de pages web complètes',
      'Rédaction d\'une charte éditoriale',
      'Application de techniques SEO pour la visibilité'
    ]
  },
  {
    type: 'pro',
    titre: 'EARZ\'',
    sousTitre: 'Agence de communication pour start-ups',
    description: 'Agence de communication dédiée aux start-ups et événements. Expertise en stratégie marketing, digitale, design graphique et création de sites web.',
    role: 'Développeur WordPress & UI/UX Designer',
    tags: ['WordPress', 'Figma', 'SEO', 'UX/UI', 'Plugins', 'Rédaction web'],
    liens: [
      { url: 'https://earz.infinityfreeapp.com/?i=2', label: 'Voir le site', icone: 'site' }
    ],
    points: [
      'Création et gestion de sites WordPress avec plugins avancés',
      'Conception de maquettes Figma, amélioration UX',
      'Amélioration de la visibilité web de 25% grâce au SEO'
    ]
  }
];

const iconeMap = {
  site: FaExternalLinkAlt,
  github: FaGithub,
  figma: FaFigma
};

export function SectionProjets() {
  const [vue, setVue] = useState<TypeProjet>('pro');
  const basculer = () => setVue(vue === 'pro' ? 'jeux' : 'pro');
  const projetsFiltres = projets.filter(p => p.type === vue);

  return (
    <section id="projets" className="section section-centre section-projets">
      <h2 className="titre-section">Projets</h2>
      <p className="texte-intro-projets">Quelques réalisations classées entre mini-jeux exploratoires et projets plus structurés / académiques.</p>

      <div className="filtres-projets unique">
        <button
          type="button"
          className="btn-filtre-projet actif"
          onClick={basculer}
          aria-pressed={vue === 'jeux'}
          aria-label={vue === 'pro' ? 'Afficher les mini-jeux' : 'Afficher les projets professionnels'}
        >
          <span>{vue === 'pro' ? ' Voir Minijeux' : ' Voir Pro / Académiques'}</span>
        </button>
      </div>

      <div className="zone-projets">
        <div
          key={vue}
          className="grille-projets-2col liste-projets"
          aria-live="polite"
          aria-label={vue === 'pro' ? 'Projets professionnels et académiques' : 'Mini-jeux'}
        >
          {projetsFiltres.map((p, idx) => (
            <article key={p.titre} className="carte-projet-v2" tabIndex={0} data-index={idx}>
              <div className="carte-projet-header">
                <div>
                  <h3 className="titre-projet-v2">{p.titre}</h3>
                  <p className="sous-titre-projet">{p.sousTitre}</p>
                </div>
                <div className="liens-projet">
                  {p.liens.map(l => {
                    const Icone = iconeMap[l.icone];
                    return (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="lien-projet-btn" title={l.label}>
                        <Icone />
                        <span>{l.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <p className="role-projet"><strong>Mon rôle :</strong> {p.role}</p>
              <p className="desc-projet-v2">{p.description}</p>

              {p.points && p.points.length > 0 && (
                <ul className="points-projet">
                  {p.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
              )}

              <div className="tags-projet-v2">
                {p.tags.map(t => <span key={t} className="tag-projet-v2">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
