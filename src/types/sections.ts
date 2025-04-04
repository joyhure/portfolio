export type SectionId = 'titre1' | 'titre2' | 'titre3' | 'titre4' | 'titre5' | 'titre6';

// Définition du type Contents
export interface Contents {
    [key: string]: {
        title: string;
        content: string;
    }
}

export type Sections = {
    [key in SectionId]: {
        title: string;
        content: string;
    }
}