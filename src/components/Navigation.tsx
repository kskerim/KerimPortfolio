import React from 'react';

interface Props {
  activeId?: string;
}

const liens = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'projets', label: 'Projets' },
  { id: 'competences', label: 'Compétences' },
  { id: 'experience-formation', label: 'Expériences & Formations' },
  { id: 'contact', label: 'Contact' }
];

export function Navigation({ activeId }: Props) {
  const defiler = (id: string) => {
    if (id === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <header className="navigation">
      <div className="logo-nom" onClick={() => defiler('accueil')}>
        <span className="prenom">Kerim</span> <span className="nom">Kasikci</span>
      </div>
      <nav>
        <ul>
          {liens.map(l => (
            <li key={l.id} className={activeId === l.id ? 'actif' : undefined}>
              <button onClick={() => defiler(l.id)}>{l.label}</button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
