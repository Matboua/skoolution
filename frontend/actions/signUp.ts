import axios from "axios";
import { axiosConfig } from "../config/axiosConfig";
import { signupFormData } from "../types/formDatas";


export const signUp = async (FormData: signupFormData) => {
    try {
        const response = await axiosConfig.post("/user/signup", {
            nom: FormData.nom,
            prenom: "FormData.prenom",
            mail: FormData.mail,
            pwd: FormData.password,
            ville: "FormData.ville",
            tel: FormData.tel,
            type: "Elev"
        });
        const result = await axios.post("http://localhost:3000/api/regester", response.data);
        console.log(response);
        
        return response;
    } catch (error) {
        return error
    }
}