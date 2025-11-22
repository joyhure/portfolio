# 🚀 Portfolio - Joy Huré

Portfolio personnel présentant mon parcours de reconversion professionnelle vers le développement web, de l'optique au BTS SIO SLAM.

## 🌟 Aperçu

Site web personnel développé avec **Astro** et **TypeScript**, présentant :
- Mon parcours professionnel (Timeline interactive)
- Mes compétences techniques BTS SIO
- Mes projets de développement
- Mes expériences de stage

## 🛠️ Technologies

- **Framework** : [Astro](https://astro.build/)
- **Langages** : TypeScript, JavaScript
- **Styling** : Tailwind CSS + CSS Custom
- **UI Components** : React (Timeline)
- **Icônes** : Iconify
- **Build** : Vite
- **Déploiement** : GitHub Pages

## 📁 Structure du projet

```
src/
├── components/
│   ├── career/           # Timeline parcours professionnel
│   ├── skills/           # Compétences techniques (carrousels)
│   ├── card-portfolio/   # Cartes projets
│   └── atoms/           # Composants réutilisables
├── content/
│   └── bts/             # Contenu BTS SIO (compétences)
├── pages/               # Pages du site
├── styles/              # Styles globaux
└── utils/               # Utilitaires (couleurs moyennes, etc.)
```

## 🚀 Installation & Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/joyhure/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:4321/portfolio/`

## 📜 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Vérification TypeScript
npm run check
```

## 🎨 Fonctionnalités principales

### Timeline interactive
- Parcours professionnel chronologique
- Animation au scroll
- Design responsive

### Carrousels de compétences
- **Skills** : Langages et frameworks
- **Tools** : Outils et logiciels
- Défilement automatique au survol
- Navigation manuelle avec flèches

### Portfolio projets
- Couleurs dynamiques basées sur les images
- Liens vers les rapports de stage
- Détails techniques de chaque projet

### Compétences BTS SIO
- Section collapsible par compétence
- Navigation active
- Liens vers les preuves (PDF)

## 🌐 Déploiement

Le site est automatiquement déployé sur GitHub Pages.

### URL de production
🔗 [https://joyhure.github.io/portfolio/](https://joyhure.github.io/portfolio/)

## 🎯 Sections du portfolio

1. **Accueil** - Présentation personnelle avec hero section
2. **Parcours** - Timeline chronologique interactive
3. **Compétences** - Skills techniques et outils (carrousels)
4. **Projets** - Portfolio de réalisations avec avatar pointeur
5. **BTS SIO** - Compétences acquises en formation
6. **Contact** - Informations de contact et réseaux sociaux

## 📱 Responsive Design

- **Mobile First** : Design optimisé mobiles
- **Breakpoints** : 320px → 2560px+
- **Grid adaptatif** : Colonnes automatiques
- **Typographie fluide** : `clamp()` pour la scalabilité
- **Carrousels adaptatifs** : Nombre d'éléments selon l'écran

## 🎨 Design System

```css
/* Palette de couleurs */
--primary-50: #7644e3;        /* Violet principal */
--secondary-90: #CA88D1;      /* Rose secondaire */
--terminal-background: #1a1a1a;  /* Fond terminal */

/* Typographie */
--text-xx-large: clamp(2.5rem, 4vw, 4rem);
--max-width: 108rem;          /* Largeur maximale (1728px) */

/* Terminal styling */
--terminal-user-color: #CA88D1;
--terminal-icons-color: #000a;
```

## 🔧 Composants principaux

### Terminal Skills & Tools
- Carrousel horizontal avec 6 éléments visibles
- Défilement automatique au survol
- Navigation avec flèches stylisées
- Design terminal avec couleurs personnalisables

### Timeline Career
- Composant React dans Astro
- Animation smooth au scroll
- Points de repère chronologiques
- Responsive avec collapse mobile

### Card Portfolio
- Couleurs extraites des images (algorithme moyenne)
- Hover effects avec transform
- Liens vers projets externes
- Design cards moderne

## 🚀 Fonctionnalités avancées

### Extraction couleurs images
```javascript
// Utilitaire pour couleurs dominantes
import { getIMGAverageColor } from '../utils/average-img-color/average-img-color';
```

### Routing dynamique BTS
```astro
// Pages générées dynamiquement
src/pages/bts/[...slug].astro
```

### CSS Modules + Tailwind
```astro
// Mélange harmonieux CSS modules et Tailwind
import styles from './component.module.css';
class={`${styles.base} flex items-center`}
```

## 📚 Documentation

### Structure BTS SIO
- **Compétences** : Développement, réseau, cybersécurité
- **Stages** : Iknae Techno, Thanks-boss
- **Réalisations** : Alain Afflelou, projets académiques
- **Tableau de synthèse** : Compétences validées

### Projets portfolio
- **OptiTop** : Application de gestion optique
- **Projets académiques** : Divers langages et frameworks
- **Stages professionnels** : Expérience en entreprise

## 🤝 Contributions

Ce portfolio reflète mon parcours personnel de reconversion. Pour des suggestions ou améliorations :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amelioration`)
3. Commit les changements (`git commit -m 'Add: nouvelle fonctionnalité'`)
4. Push sur la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📋 Todo / Améliorations futures

- [ ] Ajouter des tests unitaires (Vitest)
- [ ] Optimiser les performances images (Astro Image)
- [ ] Ajouter un blog intégré
- [ ] Internationalisation (FR/EN)
- [ ] Dark/Light mode toggle
- [ ] Animations avancées (Framer Motion)

## 🐛 Issues connues

- Carrousels : Léger lag sur Safari iOS
- Timeline : Performance sur très anciennes versions IE
- PDFs intégrés : Nécessite JavaScript activé

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📬 Contact

- **Portfolio** : [https://joyhure.github.io/portfolio/](https://joyhure.github.io/portfolio/)
- **GitHub** : [joyhure](https://github.com/joyhure)
- **Email** : [Votre email]
- **LinkedIn** : [Votre profil LinkedIn]

---

> 💡 **Note de reconversion** : Ce portfolio documente ma transition de l'optique vers le développement web à travers le BTS SIO SLAM. Chaque section, chaque composant, chaque ligne de code représente une étape de cette évolution professionnelle passionnante.

> 🎯 **Objectif** : Démontrer mes compétences acquises en développement front-end, back-end, et ma capacité à créer des interfaces utilisateur modernes et fonctionnelles.

---

**Dernière mise à jour** : Novembre 2025  
**Version** : 1.0.0  
**Statut** : ✅ Production Ready