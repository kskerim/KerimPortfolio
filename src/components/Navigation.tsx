import React, { useState, useRef } from 'react';

interface Props {
  activeId?: string;
}

const liens = [
  { id: 'accueil', label: 'Accueil', icon: 'home' },
  { id: 'projets', label: 'Projets', icon: 'folder' },
  { id: 'competences', label: 'Compétences', icon: 'code' },
  { id: 'experience-formation', label: 'Parcours', icon: 'briefcase' },
  { id: 'contact', label: 'Contact', icon: 'mail' }
];

const icons: Record<string, JSX.Element> = {
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  folder: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
  code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  briefcase: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
};

export function Navigation({ activeId }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dockRef = useRef<HTMLUListElement>(null);

  const defiler = (id: string) => {
    if (id === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const headerHeight = 80;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
      }
    }
  };

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.25;
    if (distance === 1) return 1.1;
    return 1;
  };

  const getTranslateY = (index: number) => {
    if (hoveredIndex === null) return 0;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return -4;
    if (distance === 1) return -2;
    return 0;
  };

  return (
    <header className="navigation">
      <div className="logo-nom" onClick={() => defiler('accueil')}>
        <span className="prenom">Kerim</span> <span className="nom">Kasikci</span>
      </div>
      <nav className="dock-nav">
        <ul 
          ref={dockRef} 
          className="dock-menu"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {liens.map((l, index) => (
            <li 
              key={l.id} 
              className={`dock-item ${activeId === l.id ? 'actif' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              style={{
                transform: `scale(${getScale(index)}) translateY(${getTranslateY(index)}px)`,
              }}
            >
              <button onClick={() => defiler(l.id)} title={l.label}>
                <span className="dock-icon">{icons[l.icon]}</span>
                <span className="dock-label">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
