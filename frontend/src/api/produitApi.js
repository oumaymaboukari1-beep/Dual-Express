// src/api/produitApi.js
import api from './axios';

export const getProduits = async () => api.get('/produits');
export const getProduitsDisponibles = async () => api.get('/produits/disponibles');
export const getProduitsByCategorie = async (cat) => api.get(`/produits/categorie/${cat}`);
export const getProduitsByRestaurant = async (restaurantId) => api.get(`/produits/restaurant/${restaurantId}`);
export const getProduitsDisponiblesByRestaurant = async (restaurantId) =>
    api.get(`/produits/restaurant/${restaurantId}/disponibles`);

export const createProduit = async (req) => api.post('/produits', req);