import axios from "axios";
import { axiosConfig } from "../config/axiosConfig";
import { signupFormData } from "../types/formDatas";
import { useRouter } from "next/navigation";


export const signUp = async (FormData: signupFormData) => {
    const Router = useRouter();
    console.log(FormData);
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
        console.log("Sign-up successful:", response.data);
        
        const result = await axios.post("http://localhost:3000/api/signup", response.data.token);
        return result.data;
        Router.replace("/dashboard");
    } catch (error) {
        console.log("Sign-up failed:", error);
    }
}