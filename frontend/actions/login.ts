import { axiosConfig } from "../config/axiosConfig";

export const login = async (email: string, password: string) => {
    try {
        const response = await axiosConfig.post("/auth/login", {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};