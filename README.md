# Modèle de Portfolio avec Astro

Bienvenue dans ce portfolio construit avec Astro ! Vous trouverez ci-dessous des explications sur ce modèle.

## Table des Matières

1. [Utilisation](#utilisation)
2. [Format des Données du Portfolio](#format-des-données-du-portfolio)
3. [Ajout d'icônes avec Iconify](#ajout-dicônes-avec-iconify)
4. [Technologies Utilisées](#technologies-utilisées)
5. [Design Figma](#design-figma)
6. [Auteur et Licence](#auteur-et-licence)
7. [Bugs et Problèmes](#bugs-et-problèmes)
8. [Page d'Accueil](#page-daccueil)

## Utilisation

Pour ajouter de nouveaux éléments à votre portfolio, vous devez les ajouter dans `/src/data/portfolioData.js`.

## Format des Données du Portfolio

Les données de votre portfolio doivent suivre ce format :

```js
/**
 * @typedef PortfolioData
 * @property {string} imgSrc - URL de l'image
 * @property {string} title - Titre de la carte
 * @property {string[]} skills - Tableau de vos compétences, par exemple ['React', 'CSS', 'JavaScript']
 * @property {string} description - Description de la carte
 * @property {string} demoURL - URL d'une page de démonstration
 * @property {string} repoURL - URL du dépôt, par exemple https://github.com/user/repo
 * @property {string} anim - Animation qui se jouera lorsque la carte se charge, par exemple fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness - Niveau de luminosité de la couleur de fond de la carte, par exemple 0.1
 */

/**
 * @type {PortfolioData[]}
 */
export const portfolioData = [
    {
        imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
        title: 'Restaurant',
        skills: ['React', 'StyledComponents'],
        description: 'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
        demoURL: '',
        repoURL: '',
        anim: 'fade-right',
        averageBrightness: 0.1,
    },
    {
        imgSrc: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/299377097/original/7eb7dcebe244fcf5ad75d92b0969fc116946bd57/create-professional-amd-responsive-wordpress-website.jpg',
        title: 'E-commerce',
        skills: ['JavaScript', 'Bootstrap'],
        description: 'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
        demoURL: '',
        repoURL: '',
        anim: 'fade-up',
        averageBrightness: 0.1,
    },
    // Ajoutez plus d'éléments de portfolio ici
];

const skillIcons = {
    JavaScript: 'skill-icons:javascript',
    React: 'skill-icons:react-dark',
    Astro: 'skill-icons:astro',
    CSS: 'skill-icons:css',
    Sass: 'skill-icons:sass',
    StyledComponents: 'skill-icons:styledcomponents',
    Bootstrap: 'skill-icons:bootstrap',
    Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Mappe portfolioData pour inclure les icônes de compétences
 */
export const getPortfolioData = portfolioData.map((item) => ({
    ...item,
    skills: item.skills.map((skill) => skillIcons[skill]),
}));
```

Ces données sont ensuite passées au composant portfolio en tant que props.

## Ajout d'Icônes avec Iconify

Nous utilisons Iconify pour les icônes. Pour ajouter de nouvelles icônes, utilisez l'attribut `icon`.

### Exemple

Pour utiliser une icône React :

```html
<iconify-icon icon="logos:react" width="27" height="27"></iconify-icon>
```

Dans `data.js`, spécifiez l'identifiant de l'icône comme ceci :

```js
{
    title: "React",
    link: "https://reactjs.org/",
    icon: "logos:react"
}
```

### Ajout du Script Iconify

Ajoutez le script Iconify à la section `<head>` de votre projet :

```html
<head>
    <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
</head>
```

Une fois ce script inclus, vous pouvez utiliser n'importe quelle icône Iconify en spécifiant son identifiant.

## Technologies Utilisées

Ce modèle utilise plusieurs technologies modernes pour créer un portfolio très réactif et visuellement attrayant :

- **Astro** : Un générateur de sites statiques moderne qui vous permet d'utiliser vos frameworks préférés tels que React, Vue et Svelte. Il optimise les performances en expédiant moins de JavaScript.
- **React** : Une bibliothèque JavaScript pour construire des interfaces utilisateur, qui permet la création de composants réutilisables.
- **Tailwind CSS** : Un framework CSS utilitaire-first qui vous permet de concevoir directement dans votre balisage, offrant flexibilité et contrôle sur votre style.
- **Styled Components** : Une bibliothèque pour React et React Native qui vous permet d'utiliser des styles au niveau des composants dans votre application. Elle utilise des littéraux de modèle étiquetés pour styliser les composants.
- **Iconify** : Une bibliothèque complète pour les icônes qui donne accès à des milliers d'icônes de différentes collections, toutes accessibles via une syntaxe unique.

## Design Figma

Vous pouvez voir et éditer le design de ce modèle sur Figma. Voici le [lien du design Figma](https://www.figma.com/design/15EteAKw8d0QCNCucw5lft/mi-primer-blog?node-id=200-643&t=hbUqn1hqSfLcfI92-0).

## Auteur et Licence

- **Auteur** : Joy Huré
- **Licence** : MIT

### Basé sur le travail de :

Ce projet est basé sur le modèle de portfolio créé par SofiDev / Garrux. Vous pouvez trouver l'original [ici](https://github.com/SofiDevO/portfolio-sofidev-garrux).


---

Amusez-vous à construire votre portfolio !