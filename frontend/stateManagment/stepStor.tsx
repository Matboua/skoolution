import { create } from "zustand";
// types for the store

export interface StepStore {
    counter: number;
    increment: () => void;
    decrement: () => void;
}
export const useStepStore = create<StepStore>((set) => ({
    counter: 1,
    increment: () =>
        set((state) => ({
            counter: state.counter < 3 ? state.counter + 1 : state.counter,
        })),
    decrement: () =>
        set((state) => ({
            counter: state.counter > 1 ? state.counter - 1 : state.counter,
        })),
}))