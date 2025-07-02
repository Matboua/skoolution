import { create } from "zustand";

export const useStepStore = create((set) => ({
    counter:1,
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
}))