import React from 'react';
import { 
  SiHtml5, SiJavascript, SiTypescript, SiReact, SiAngular, SiVuedotjs, SiNextdotjs,
  SiBootstrap, SiTailwindcss, SiVite, SiFigma, SiAdobexd, SiPython, SiPhp, 
  SiKotlin, SiMysql, SiMongodb, SiAmazon, SiSymfony, SiGit, SiDocker, 
  SiWordpress, SiVscodium, SiJirasoftware
} from 'react-icons/si';
import { FaGitlab } from 'react-icons/fa';

interface Categorie {
  titre: string;
  type: 'code' | 'ux' | 'backend' | 'outils';
  items: string[];
}

const categories: Categorie[] = [
  {
    titre: 'Front-end',
    type: 'code',
    items: [
      'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Next.js', 'Vite', 'Bootstrap', 'Tailwind CSS'
    ]
  },
  {
    titre: 'Back-end',
    type: 'backend',
    items: [
      'Python', 'PHP', 'C#', 'Kotlin', 'MySQL', 'MongoDB', 'AWS', 'Symfony'
    ]
  },
  {
    titre: 'UX/UI Design',
    type: 'ux',
    items: [
      'Figma', 'Adobe XD', 'Prototyping', 'Wireframing', 'Design System'
    ]
  },
  {
    titre: 'Outils & Méthodologies',
    type: 'outils',
    items: [
      'Git/GitHub', 'Docker', 'CI/CD', 'Agile', 'Scrum', 'WordPress', 'SEO', 'VS Code', 'Jira'
    ]
  }
];

export function SectionCompetences() {
  return (
    <section id="competences" className="section section-centre">
      <h2 className="titre-section">Mes Compétences</h2>
      <p className="texte-intro-competences">Un aperçu de mes compétences techniques acquises au cours de ma formation et de mes expériences professionnelles.</p>
      <div className="grille-cartes-competences">
        {categories.map(cat => (
          <div key={cat.titre} className={`carte-competence type-${cat.type}`} tabIndex={0}>
            <h3 className="titre-carte-competence">{cat.titre}</h3>
            <div className="liste-tags">
              {cat.items.map(it => {
                const key = it;
                const Icon = getIconFor(it);
                return (
                  <span key={key} className={`tag-competence tag-${cat.type}`}>
                    {Icon && <Icon className="icone-tag" aria-hidden="true" />}<span>{it}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function getIconFor(label: string) {
  switch (label) {
    case 'HTML/CSS':
      return SiHtml5;
    case 'JavaScript':
      return SiJavascript;
    case 'TypeScript':
      return SiTypescript;
    case 'React':
      return SiReact;
    case 'Angular':
      return SiAngular;
    case 'Vue.js':
      return SiVuedotjs;
    case 'Next.js':
      return SiNextdotjs;
    case 'Vite':
      return SiVite;
    case 'Bootstrap':
      return SiBootstrap;
    case 'Tailwind CSS':
      return SiTailwindcss;
    case 'Figma':
      return SiFigma;
    case 'Adobe XD':
      return SiAdobexd;
    case 'Prototyping':
    case 'Wireframing':
    case 'Design System':
      return undefined;
    case 'Python':
      return SiPython;
    case 'PHP':
      return SiPhp;
    case 'C#':
      return SiKotlin; // placeholder
    case 'Kotlin':
      return SiKotlin;
    case 'MySQL':
      return SiMysql;
    case 'MongoDB':
      return SiMongodb;
    case 'AWS':
      return SiAmazon;
    case 'Symfony':
      return SiSymfony;
    case 'Git/GitHub':
      return SiGit;
    case 'Docker':
      return SiDocker;
    case 'CI/CD':
      return FaGitlab; // pipeline icon
    case 'Agile':
    case 'Scrum':
      return FaGitlab; // process placeholder
    case 'WordPress':
      return SiWordpress;
    case 'SEO':
      return SiWordpress; // cms placeholder
    case 'VS Code':
      return SiVscodium;
    case 'Jira':
      return SiJirasoftware;
    default:
      return undefined;
  }
}
