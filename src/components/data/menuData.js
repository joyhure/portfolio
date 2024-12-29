const base = import.meta.env.BASE_URL;

export const mainMenu = [
     { link: "#", content: "Accueil"},
     { link: "#about", content: "A Propos"},
     { link: "#career", content: "Parcours" },
     { link: "#skills", content: "Compétences" },
     { link: "#projects", content: "Projets"},
     { link: "#exam", content: "BTS SIO"}
]
export const menuBTS = [
     { link: `${base}`, content: "Accueil"},
     { link: `${base}#about`, content: "A Propos"},
     { link: `${base}#career`, content: "Parcours" },
     { link: `${base}#skills`, content: "Compétences" },
     { link: `${base}#projects`, content: "Projets"},
     { link: `${base}#exam`, content: "BTS SIO"}
];

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