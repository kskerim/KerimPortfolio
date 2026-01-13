# Portfolio - Kerim Kasikci

Portfolio personnel moderne et interactif développé avec React, TypeScript et Vite. Site one-page présentant mon parcours, mes compétences et mes projets de développement web.

## Fonctionnalités

- **Design moderne** avec animations fluides et transitions élégantes
- **Responsive** adapté à tous les appareils
- **Performance optimisée** avec Vite (bundle ~69KB gzippé)
- **Interface interactive** avec fond animé de particules
- **Timeline interactive** pour expériences et formations avec détails au survol
- **Tags de compétences** avec icônes de technologies
- **Formulaire de contact** fonctionnel
- **Filtrage de projets** avec transitions smooth

## Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **React Icons** - Icônes pour compétences et réseaux sociaux
- **CSS3** - Animations et responsive design
- **Git** - Versioning

## Installation et démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. Cloner le repository :
```bash
git clone https://github.com/kskerim/KerimPortfolio.git
cd KerimPortfolio
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

### Prévisualiser le build

```bash
npm run preview
```

## Structure du projet

```
Portfolio/
├── src/
│   ├── components/         # Composants réutilisables
│   │   ├── Navigation.tsx  # Barre de navigation
│   │   └── FondInteractif.tsx  # Fond animé avec particules
│   ├── sections/          # Sections du portfolio
│   │   ├── SectionAccueil.tsx
│   │   ├── SectionProjets.tsx
│   │   ├── SectionCompetences.tsx
│   │   ├── SectionExperienceFormation.tsx
│   │   └── SectionContact.tsx
│   ├── App.tsx            # Composant principal
│   ├── main.tsx           # Point d'entrée
│   └── global.css         # Styles globaux et animations
├── public/                # Fichiers statiques
├── index.html            # Template HTML
└── package.json          # Dépendances et scripts
```

## Sections du portfolio

1. **Accueil** - Présentation avec lien GitHub
2. **Projets** - Projets académiques et mini-jeux avec filtres
3. **Compétences** - Technologies maîtrisées avec icônes
4. **Expériences & Formations** - Timeline interactive avec missions détaillées
5. **Contact** - Formulaire et informations de contact

## Personnalisation

Pour personnaliser le portfolio :

1. **Couleurs** : Modifier les variables CSS dans `src/global.css` (lignes 1-15)
2. **Contenu** : Éditer les fichiers dans `src/sections/`
3. **Projets** : Mettre à jour les tableaux dans `SectionProjets.tsx`
4. **Expériences** : Modifier le tableau `lignes` dans `SectionExperienceFormation.tsx`
5. **Compétences** : Ajuster les données dans `SectionCompetences.tsx`

## À faire

- [ ] Ajouter les vrais liens vers les projets
- [ ] Intégrer le CV PDF dans `/public/cv.pdf`
- [ ] Configurer le backend pour le formulaire de contact
- [ ] Ajouter Google Analytics
- [ ] Optimiser les images (WebP)
- [ ] Déployer sur Vercel/Netlify

## Licence

Projet personnel - Tous droits réservés © 2025 Kerim Kasikci

## Contact

- **Email** : kerimkskc7@gmail.com
- **LinkedIn** : Kerim Kasikci
- **GitHub** : [@kskerim](https://github.com/kskerim)

---

N'hésitez pas à mettre une étoile si vous aimez ce projet !

