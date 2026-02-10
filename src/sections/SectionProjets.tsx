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
  image: string;
  type: TypeProjet;
}

const projets: Projet[] = [
  {
    type: 'pro',
    titre: 'MétéoWeb',
    sousTitre: 'Application météo complète et moderne',
    description: 'Application météo construite avec Next.js 16 et l\'API Open-Meteo. Architecture propre, UI soignée et meilleures pratiques de développement.',
    role: 'Développeur Full-stack',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Framer Motion', 'Recharts', 'Zod', 'Vitest', 'PWA'],
    liens: [
      { url: 'https://github.com/kskerim/meteoweb', label: 'GitHub', icone: 'github' }
    ],
    points: [
      'Recherche de villes avec auto-complétion et historique',
      'Prévisions horaires 48h avec graphiques interactifs',
      'Système de favoris, unités configurables, thème clair/sombre',
      'PWA installable, fond dynamique selon météo'
    ]
  },
  {
    type: 'pro',
    titre: 'Pokédex 151',
    sousTitre: 'Site des 151 premiers Pokémon',
    description: 'Conception et développement en groupe du site complet dédié aux 151 premiers Pokémon avec fiches détaillées, filtres et design immersif.',
    role: 'Développeur front-end',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=800&q=80',
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
    role: 'UI/UX Designer — Conception Figma',
    image: 'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?auto=format&fit=crop&w=800&q=80',
    tags: ['Figma', 'UX Research', 'Wireframes', 'Prototypage', 'Design System', 'Composants UI'],
    liens: [
      { url: 'https://www.figma.com/design/bVsNHCpmdTT9oSHhd5PA6l/Platopark_Projet_Kerim?node-id=0-1&t=HN4zQtSpVPhEE9Fx-1', label: 'Figma', icone: 'figma' }
    ],
    points: [
      'Tunnel de réservation guidé avec récapitulatif',
      'Composants UI réutilisables (tabs, cards, chips, calendrier)',
      'Pensée component-based, états d\'interface prévus'
    ]
  },
  {
    type: 'pro',
    titre: 'SweetMetrics',
    sousTitre: 'Comparateur nutritionnel de bonbons',
    description: 'Comparateur de valeurs nutritionnelles et statistiques diverses sur les bonbons avec visualisation de données interactive.',
    role: 'Développeur front-end & data viz',
    image: 'https://images.unsplash.com/photo-1563262924-641a8b3d1fe4?auto=format&fit=crop&w=800&q=80',
    tags: ['JavaScript', 'Chart.js', 'JSON', 'HTML', 'CSS'],
    liens: [
      { url: 'https://sokbc.github.io/SAE303/', label: 'Voir le site', icone: 'site' }
    ]
  },
  {
    type: 'pro',
    titre: 'Asso. Professeurs d\'Italien',
    sousTitre: 'Refonte du site de l\'association',
    description: 'Refonte complète d\'un site en React pour l\'Association des Professeurs d\'Italien de la Région Parisienne avec charte éditoriale et SEO.',
    role: 'Développeur React & SEO',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'JavaScript', 'SEO', 'Charte éditoriale', 'Responsive'],
    liens: [
      { url: 'https://sae-401-eight.vercel.app/', label: 'Voir le site', icone: 'site' }
    ],
    points: [
      'Création de pages web complètes',
      'Rédaction d\'une charte éditoriale',
      'Techniques SEO pour la visibilité'
    ]
  },
  {
    type: 'pro',
    titre: 'EARZ\'',
    sousTitre: 'Agence de com\' pour start-ups',
    description: 'Agence de communication dédiée aux start-ups. Stratégie marketing, design graphique et création de sites web.',
    role: 'Dev WordPress & UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    tags: ['WordPress', 'Figma', 'SEO', 'UX/UI', 'Plugins'],
    liens: [
      { url: 'https://earz.infinityfreeapp.com/?i=2', label: 'Voir le site', icone: 'site' }
    ],
    points: [
      'Gestion de sites WordPress avec plugins avancés',
      'Conception de maquettes Figma',
      'Visibilité web +25% grâce au SEO'
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
          className="grille-projets-v2 liste-projets"
          aria-live="polite"
          aria-label={vue === 'pro' ? 'Projets professionnels et académiques' : 'Mini-jeux'}
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
