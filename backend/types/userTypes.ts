export type user = {
    id: number;
    nom: string;
    prenom: string;
    mail: string;
    pwd: string;
    ville: string;
    tel: string;
    type:userTypes;
};

export enum userTypes  {
    Elev="Elev",
    Secretaire="Secretaire",
    Super_Admin="Super_Admin",
    Parent="Parent",
    Enseignant="Enseignant",
    Responsable_Pedagogique="Responsable_Pedagogique",
}