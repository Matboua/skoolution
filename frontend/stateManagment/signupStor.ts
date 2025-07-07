import { create } from "zustand";


// types for the store
export interface SignUpStore {
    counter: number;
    Errors: { [key: string]: string };
    signUpData?: { [key: string]: string };
    setSignUpData: (field: string, value: string) => void;
    setError: (field: string, message: string) => void;
    clearError: (field: string) => void;
}

export const useSignUpStore = create<SignUpStore>((set) => ({
    counter: 0,
    Errors: {},
    setError: (field, message) => {
        set((state) => ({
            Errors: { ...state.Errors, [field]: message },
        }));
    },
    clearError: (field) => {
        set((state) => {
            const { [field]: _, ...rest } = state.Errors;
            return { Errors: rest };
        });
    },
    setSignUpData(field, value) {
        set((state) => ({
            signUpData: { ...state.signUpData, [field]: value },
        }));
    },
}))