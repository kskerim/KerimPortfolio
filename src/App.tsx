import React, { useEffect, useState } from 'react';
import './global.css';
import { Navigation } from './components/Navigation';
import { FondInteractif } from './components/FondInteractif';
import { SectionAccueil } from './sections/SectionAccueil';
import { SectionProjets } from './sections/SectionProjets';
import { SectionCompetences } from './sections/SectionCompetences';
import { SectionExperienceFormation } from './sections/SectionExperienceFormation';
import { SectionContact } from './sections/SectionContact';

export default function App() {
  const [activeId, setActiveId] = useState('accueil');

  // Animation au scroll : ajouter classe 'visible' aux sections
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const animObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
    sections.forEach(sec => animObserver.observe(sec));
    return () => animObserver.disconnect();
  }, []);

  useEffect(() => {
    const ids = ['accueil','projets','competences','experience-formation','contact'];
    const sections = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    let ticking = false;
    const observer = new IntersectionObserver(entries => {
      // Choisir l'entrée la plus visible qui dépasse un petit seuil
      const visibles = entries.filter(e => e.isIntersecting);
      if (visibles.length) {
        // Trier par ratio (desc) puis par position verticale (asc)
        visibles.sort((a,b) => b.intersectionRatio - a.intersectionRatio || (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        const candidat = visibles[0].target.id;
        if (candidat && candidat !== activeId) setActiveId(candidat);
      } else {
        // Fallback: détecter manuel sur scroll si aucune intersection (ex: en haut ou bas extrême)
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            const scrollPos = window.scrollY + window.innerHeight * 0.35;
            let current = activeId;
            for (const s of sections) {
              if (s.offsetTop <= scrollPos) current = s.id;
            }
            if (current !== activeId) setActiveId(current);
            ticking = false;
          });
        }
      }
    }, { root: null, threshold: [0.15, 0.3, 0.5, 0.75] });
    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, [activeId]);

  return (
    <div className="disposition-site">
      <FondInteractif />
      <Navigation activeId={activeId} />
      <main className="contenu-principal">
        <SectionAccueil />
        <SectionProjets />
        <SectionCompetences />
        <SectionExperienceFormation />
        <SectionContact />
      </main>
    </div>
  );
}
