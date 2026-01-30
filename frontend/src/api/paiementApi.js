// src/api/paiementApi.js
import api from './axios';

export const payerCommande = async ({ commandeId, methodePaiement }) => {
    // methodePaiement: "ESPECE" | "CARTE_BANCAIRE" | "CARTE_SODEXO"
    return api.post('/paiements', { commandeId, methodePaiement });
};