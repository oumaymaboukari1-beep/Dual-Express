// src/api/commandeApi.js
import api from "./axios";

export const createCommande = async (data) => {
    const res = await api.post("/commandes", data);
    return res.data;
};

export const getCommande = async (id) => {
    const res = await api.get(`/commandes/${id}`);
    return res.data;
};

export const getAllCommandes = async () => {
    const res = await api.get("/commandes");
    return res.data;
};