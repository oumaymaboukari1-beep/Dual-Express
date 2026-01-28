// src/api/utilisateurApi.js
import api from "./axios";

export const getUsers = async () => {
    const res = await api.get("/utilisateurs");
    return res.data;
};

export const getUserById = async (id) => {
    const res = await api.get(`/utilisateurs/${id}`);
    return res.data;
};