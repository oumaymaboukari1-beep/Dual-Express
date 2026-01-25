
import api from "./axiosConfig";

export const getCommandes = () => api.get("/commandes");
export const getCommande = (id) => api.get(`/commandes/${id}`);
export const addCommande = (data) => api.post("/commandes", data);
export const updateCommande = (id, data) => api.put(`/commandes/${id}`, data);
export const deleteCommande = (id) => api.delete(`/commandes/${id}`);
