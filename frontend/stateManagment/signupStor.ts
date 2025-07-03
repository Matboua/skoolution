import { create } from "zustand";


// types for the store
export interface SignUpStore {
    counter: number;
    errors: { [key: string]: string };
    setError: (field: string, message: string) => void;
    clearError: (field: string) => void;
}

export const useSignUpStore = create<SignUpStore>((set) => ({
    counter: 0,
    errors: {},
    setError: (field, message) => {
        set((state) => ({
            errors: { ...state.errors, [field]: message },
        }));
    },
    clearError: (field) => {
        set((state) => {
            const { [field]: _, ...rest } = state.errors;
            return { errors: rest };
        });
    },
}))