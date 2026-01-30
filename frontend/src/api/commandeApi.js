// src/api/commandeApi.js
import api from './axios';

export const createCommande = async (payload) => {
    // {
    //   utilisateurId, restaurantId, adresseLivraison,
    //   lignes: [{ produitId, quantite }]
    // }
    return api.post('/commandes', payload);
};

export const getCommandeById = async (id) => api.get(`/commandes/${id}`);