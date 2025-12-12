import React, { useState, useEffect, useRef } from 'react';

interface LigneChrono {
  titre: string;
  organisation: string;
  periode: string;
  details: string[];
  type: 'formation' | 'experience';
  missions?: string[];
  horsBUT?: boolean;
}

const lignes: LigneChrono[] = [
  {
    type: 'formation',
    titre: 'BAC STMG (Option RH)',
    organisation: 'Lycée Jean-Jacques Rousseau',
    periode: '2018 - 2021',
    details: ['Sciences et Technologies du Management et de la Gestion.']
  },
  {
    type: 'formation',
    titre: 'BUT Métiers du Multimédia et de l\'Internet',
    organisation: 'CY Cergy Paris Université',
    periode: 'Sept. 2022 - Sept. 2025',
    details: [
      'Parcours développement web et dispositifs interactifs.',
      'Validation et acquisition du BUT (Bac+3).'
    ]
  },
  {
    type: 'experience',
    titre: 'Stage Développeur paramétreur',
    organisation: 'Atexo',
    periode: 'Avril - Août 2024',
    details: ['Passer votre souris pour en savoir plus'],
    missions: [
      'Paramétrage de formulaires subventions et animation d\'ateliers (JavaScript)',
      'Vidéoconférences avec les représentants régionaux pour recueillir les attentes et retours',
      'Saisie et suivi des données pour la maintenance',
      'Coordination des équipes et respect des délais',
      'Suivi qualité pour garantir la conformité des projets'
    ]
  },
  {
    type: 'experience',
    titre: 'Stage Développeur web',
    organisation: 'Olmeta',
    periode: 'Sept. 2024 - Mars 2025',
    details: ['Passer votre souris pour en savoir plus'],
    missions: [
      'Développement web en JavaScript, HTML, CSS',
      'Gestion et optimisation de sites sous WordPress',
      'Supervision et maintenance des infrastructures informatiques des services',
      'Mise en place et suivi de stratégies SEO pour améliorer la visibilité des plateformes web',
      'Gestion et animation des réseaux sociaux des différentes entités du groupe'
    ]
  },
  {
    type: 'experience',
    titre: 'Stage Chef de projet web',
    organisation: "Au Boudoir D'Hilal",
    periode: 'Mars 2025 - Sept. 2025',
    details: ['Passer votre souris pour en savoir plus'],
    missions: [
      'Gestion de projets web sur WordPress (refonte, contenus, suivi)',
      'Création de maquettes sur Figma selon les besoins clients',
      'Suivi des étapes clés et coordination des intervenants',
      'Optimisation UX/UI des interfaces',
      'Intégration basique HTML, CSS, JavaScript',
      'Proposition de solutions concrètes pour améliorer les sites'
    ]
  },
  {
    type: 'formation',
    titre: 'Mastère Expert Développement Web',
    organisation: 'ESGI',
    periode: 'Sept. 2026 (à venir)',
    details: ['Préparation de ma rentrée pour septembre 2026.']
  },
  {
    type: 'experience',
    titre: 'Conseiller de vente & accueil clientèle',
    organisation: 'Parc Astérix',
    periode: 'Oct. 2025 - Auj.',
    details: ['Passer votre souris pour en savoir plus'],
    missions: [
      'Accueil et conseil personnalisé aux visiteurs',
      'Gestion des ventes et des transactions',
      'Gestion de caisse et encaissement',
      'Animation et interaction avec les visiteurs',
      'Résolution des demandes et réclamations clients',
      'Optimisation de l\'expérience visiteur',
      'Travail en équipe dans un environnement dynamique'
    ],
    horsBUT: true
  }
];

export function SectionExperienceFormation() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const chronoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!chronoRef.current) return;
      const rect = chronoRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = rect.top;
      const end = rect.bottom;
      
      if (end < 0 || start > viewportHeight) return;
      
      const totalHeight = rect.height;
      const visibleTop = Math.max(0, viewportHeight - start);
      const progress = Math.min(1, Math.max(0, visibleTop / totalHeight));
      setScrollProgress(progress);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calcStyle = () => {
    if (hovered === null) return {};
    const w = 380;
    const hApprox = 260;
    const vw = typeof window !== 'undefined' ? window.innerWidth : 0;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 0;
    let left = pos.x + 28;
    if (left + w + 16 > vw) left = vw - w - 16;
    let top = pos.y - 40;
    if (top + hApprox > vh - 12) top = vh - hApprox - 12;
    if (top < 12) top = 12;
    return { left, top, width: w } as React.CSSProperties;
  };

  return (
    <section id="experience-formation" className="section section-chrono section-centre">
      <h2 className="titre-section">Expériences & Formations</h2>
      <p className="legende-but">
        <span className="badge-but-legende">BUT</span> = Expérience réalisée pendant le Bachelor Universitaire de Technologie
      </p>
      <div className="chrono" ref={chronoRef}>
        <div className="ligne-centrale-fill" style={{ height: `${scrollProgress * 100}%` }} />
        {lignes.map((l, i) => {
          const estExperience = l.type === 'experience';
          return (
            <div
              key={i}
              className={`ligne ${l.type}`}
              onMouseEnter={(e) => {
                if (!estExperience) return;
                setHovered(i);
                setPos({ x: e.clientX, y: e.clientY });
              }}
              onMouseMove={(e) => {
                if (hovered === i) setPos({ x: e.clientX, y: e.clientY });
              }}
              onMouseLeave={() => setHovered(prev => (prev === i ? null : prev))}
              onFocus={(e) => {
                if (!estExperience) return;
                const r = e.currentTarget.getBoundingClientRect();
                setPos({ x: r.right, y: r.top + r.height / 2 });
                setHovered(i);
              }}
              onBlur={() => setHovered(prev => (prev === i ? null : prev))}
            >
              <div className="point" />
              <div className={`carte ${estExperience ? 'carte-experience' : ''}`} tabIndex={estExperience ? 0 : -1}>
                {estExperience && !l.horsBUT && <span className="badge-but" aria-label="Pendant le BUT">BUT</span>}
                <div className="entete">
                  <h3 className="titre-ligne">{l.titre}</h3>
                  <span className="periode">{l.periode}</span>
                </div>
                <div className="org">{l.organisation}</div>
                <ul>
                  {l.details.map(d => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      {hovered !== null && lignes[hovered].missions && (
        <div className="missions-float" style={calcStyle()} aria-live="polite">
          <h4 className="missions-titre">{lignes[hovered].organisation} - <span>Missions</span></h4>
          <ul className="liste-missions">
            {lignes[hovered].missions!.map(m => <li key={m}>{m}</li>)}
          </ul>
        </div>
      )}
      <div className="centre-action">
        <a href="/Cv_Kerim_Kasikci.pdf" className="btn-accent" target="_blank" rel="noopener noreferrer"><span>Voir mon CV</span></a>
      </div>
    </section>
  );
}
