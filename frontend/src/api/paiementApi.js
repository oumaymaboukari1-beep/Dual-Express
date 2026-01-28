// src/api/paiementApi.js
import api from "./axios";

export const payer = async (commandeId, methodePaiement) => {
    const res = await api.post("/paiements", {
        commandeId,
        methodePaiement,
    });
    return res.data;
};