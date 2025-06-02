/**
 * @typedef PortafolioData
 * @property {string} imgSrc URL de l'image
 * @property {string} title Titre de la carte
 * @property {string[]} skills Tableau de tes compétences, par exemple : ['React', 'CSS', 'JavaScript']
 * @property {string} description La description de la carte
 * @property {string} repoURL URL du dépôt
 * @property {string} slug Identifiant unique du projet pour le routing, par exemple : 'optitop'
 * @property {string} anim L'animation qui sera exécutée lors du chargement de la carte, par exemple : fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness La luminosité moyenne de la couleur de fond de la carte, par exemple : 0.1
 */

/**
 * @type {PortafolioData[]}
 */
const base = import.meta.env.BASE_URL;

export const portafolioData = [
	{
		imgSrc: `${base}img/optiweb.png`,
		title: 'Optitop',
		skills: ['Bootstrap', 'JavaScript','Springboot', 'Java', 'mySQL', 'Flutter', 'Dart'],
		description:
			'Deux applications (web et mobile) conçues pour automatiser la gestion des statistiques commerciales d’un magasin d’optique.',
		/*demoURL: '',*/
		slug: 'optitop',
		repoURL: 'https://github.com/joyhure/Optitop',
		anim: 'fade-up',
	},/*
	{
		imgSrc: `${base}img/optilourde.png`,
		title: 'Optitop : L\'application lourde',
		skills: ['Python', 'Qt', 'mySQL', 'Laravel'],
		description:
			' Une application bureautique dédiée aux managers. Elle permet l’importation des données commerciales via des fichiers CSV. En cours de réalisation...',
		/*demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: `${base}img/optiphone.png`,
		title: 'Optitop : L\'application mobile',
		skills: ['Flutter', 'Dart', 'mySQL', 'Laravel'],
		description:
			'Une solution mobile optimisée pour la consultation des indicateurs de performance et la gestion des comptes utilisateur. En cours de réalisation...',
		/*demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},*/
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
    HTML: 'skill-icons:html',
    PHP: 'skill-icons:php-dark',
    mySQL: 'skill-icons:mysql-dark',
	Laravel: 'skill-icons:laravel-dark',
	Python: 'skill-icons:python-dark',
	Qt: 'skill-icons:qt-dark',
	Flutter: 'skill-icons:flutter-dark',
	Dart: 'skill-icons:dart-dark',
	Java: 'skill-icons:java-dark',
	Springboot: 'skill-icons:spring-dark'
};

/**
 * @description Pour ajouter les icônes des compétences
 * Vous pouvez consulter Array.map sur https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// On garde tout le contenu précédent de l'élément
		...item,
		// On remplace les compétences par les icônes correspondantes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});

