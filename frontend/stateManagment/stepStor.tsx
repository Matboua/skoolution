import { create } from "zustand";
// types for the store

export interface StepStore {
    counter: number;
    increment: () => void;
    decrement: () => void;
}
export const useStepStore = create<StepStore>((set) => ({
    counter: 0,
    increment: () => {
        set((state) => ({
            counter: state.counter < 2 ? state.counter + 1 : state.counter,
        }))
    },
    decrement: () =>
        set((state) => ({
            counter: state.counter > 0 ? state.counter - 1 : state.counter,
        })),
}))