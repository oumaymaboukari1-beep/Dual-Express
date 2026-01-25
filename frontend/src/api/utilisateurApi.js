
import api from "./axiosConfig";

/**
 * Récupérer la liste de tous les utilisateurs
 */
export const getUtilisateurs = () => {
    return api.get("/utilisateurs");
};

/**
 * Récupérer un utilisateur par ID
 */
export const getUtilisateur = (id) => {
    return api.get(`/utilisateurs/${id}`);
};

/**
 *
