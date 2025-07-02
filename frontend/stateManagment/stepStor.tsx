import { create } from "zustand";
// types for the store

export interface StepStore {
    counter: number;
    increment: () => void;
    decrement: () => void;
}
export const useStepStore = create<StepStore>((set) => ({
    counter:1,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
}))