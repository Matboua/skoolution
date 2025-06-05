export type user = {
    id: number;
    nom: string;
    prenom: string;
    mail: string;
    pwd: string;
    ville: string;
    tel: string;
    type: "Elev" | "Secretaire" | "Super_Admin" | "Parent" | "Enseignant" | "Responsable_Pedagogique";
};
