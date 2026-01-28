// src/api/authApi.js
import api from "./axios";

export const login = async (data) => {
    const res = await api.post("/auth/login", {
        email: data.email,
        motDePasse: data.motDePasse,
    });
    return res.data;
};

export const register = async (data) => {
    const res = await api.post("/auth/register", {
        nom: data.nom,
        email: data.email,
        motDePasse: data.motDePasse,
        telephone: data.telephone,
        adresse: data.adresse,
        roleId: data.roleId,
    });
    return res.data;
};
