const base = import.meta.env.BASE_URL;

export const mainMenu = [
     { link: "#", content: "Accueil"/*, icon:"lucide:home"*/ },
     { link: "#about", content: "A Propos"/*, icon:"octicon:person-24"*/ },
     { link: "#career", content: "Parcours" },
     { link: "#skills", content: "Compétences" },
     { link: "#projects", content: "Projets"/*, icon:"carbon:portfolio"*/ },
     { link: "#exam", content: "BTS SIO"/*, icon:"mdi:blog"*/ }
]
export const menuBTS = [
     { link: "/", content: "Accueil"/*, icon:"lucide:home"*/ },
     { link: "/#about", content: "A Propos"/*, icon:"octicon:person-24"*/ },
     { link: "/#career", content: "Parcours" },
     { link: "/#skills", content: "Compétences" },
     { link: "/#projects", content: "Projets"/*, icon:"carbon:portfolio"*/ },
     { link: "/#exam", content: "BTS SIO"/*, icon:"mdi:blog"*/ }
]

export const tableauData = {
     title: "Tableau de synthèse du BTS",
     description: "Tableau de synthèse interactif",
     heroImage: `${base}img/competence.jpg`,
     slug: "tableau",
     position: 1
};

export const realisationsData = {
     title: "Autres réalisations",
     description: "Réalisations et TP accomplis durant ma formation",
     heroImage: `${base}img/realisation.jpg`,
     slug: "realisations",
     position: 3
};

export const stagesData = {
     title: "Stages",
     description: "Les stages effectués durant ma formation",
     heroImage: `${base}img/stageinfo.jpg`,
     slug: "stages",
     position: 2
};