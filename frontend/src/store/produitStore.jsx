
import { create } from "zustand";

export const useProduitStore = create((set) => ({
    produits: [],
    setProduits: (data) => set({ produits: data }),
}));