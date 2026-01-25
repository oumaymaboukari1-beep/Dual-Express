
import api from "./axiosConfig";

export const getPaiements = () => api.get("/paiements");
export const getPaiement = (id) => api.get(`/paiements/${id}`);
export const addPaiement = (data) => api.post("/paiements", data);
export const updatePaiement = (id, data) => api.put(`/paiements/${id}`, data);
export const deletePaiement = (id) => api.delete(`/paiements/${id}`);
