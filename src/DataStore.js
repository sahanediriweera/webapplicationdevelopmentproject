import create from 'zustand';
import {devtools, persist } from 'zustand/middleware';

const useBearStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }))

export default useBearStore;