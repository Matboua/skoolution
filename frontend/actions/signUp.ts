"use server";
import { axiosConfig } from "../config/axiosConfig";
import { signupFormData } from "../types/formDatas";


export const signUp = async (FormData: signupFormData) => {
    console.log("FormData");
    try {
        const response = axiosConfig.post("/user/signup", {
            nom: FormData.nom,
            prenom: FormData.prenom,
            mail: FormData.mail,
            pwd: FormData.pwd,
            ville: FormData.ville,
            tel: FormData.tel,
            type: FormData.type
        });
        return response.data;
    } catch (error) {
        console.error("Sign-up failed:", error);
        throw error;
    }
}