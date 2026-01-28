// src/api/produitApi.js
import api from "./axios";

export const getProduits = async () => {
    const res = await api.get("/produits");
    return res.data;
};

export const getProduitsByRestaurant = async (restaurantId) => {
    const res = await api.get(`/produits?restaurantId=${restaurantId}`);
    return res.data;
};

export const createProduit = async (data) => {
    const res = await api.post("/produits", data);
    return res.data;
};