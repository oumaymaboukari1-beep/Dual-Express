// src/store/cartStore.js
import { create } from "zustand";

export const useCartStore = create((set) => ({
  items: [],
  addItem: (p) =>
    set((state) => ({
      items: [...state.items, p],
    })),
  clear: () => set({ items: [] }),
}));