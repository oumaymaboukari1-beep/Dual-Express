import { create } from "zustand";

export const useCartStore = create((set) => ({
    restaurant: null,
    items: [],

    setRestaurant: (resto) =>
        set(() => ({ restaurant: resto, items: [] })),

    addItem: (produit) =>
        set((state) => {
            const exist = state.items.find((i) => i.produit.id === produit.id);

            if (exist) {
                return {
                    ...state,
                    items: state.items.map((i) =>
                        i.produit.id === produit.id
                            ? { ...i, quantite: i.quantite + 1 }
                            : i
                    ),
                };
            }

            return {
                ...state,
                items: [...state.items, { produit, quantite: 1 }],
            };
        }),

    clear: () => set({ restaurant: null, items: [] }),
}));
