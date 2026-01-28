// src/api/restaurantApi.js
import api from "./axios";

export const getRestaurants = async () => {
    const res = await api.get("/restaurants");
    return res.data;
};

export const getRestaurantById = async (id) => {
    const res = await api.get(`/restaurants/${id}`);
    return res.data;
};