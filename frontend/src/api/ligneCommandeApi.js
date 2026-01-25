
import api from "./axiosConfig";

export const getLignesCommande = () => api.get("/ligne-commandes");
export const getLigneCommande = (id) => api.get(`/ligne-commandes/${id}`);
export const addLigneCommande = (data) => api.post("/ligne-commandes", data);
export const updateLigneCommande = (id, data) =>
    api.put(`/ligne-commandes/${id}`, data);
export const deleteLigneCommande = (id) =>
    api.delete(`/ligne-commandes/${id}`);
