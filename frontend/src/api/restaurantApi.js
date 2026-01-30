import api from "./axios";

export const getRestaurants = () => api.get("/restaurants");

export const getRestaurantById = (id) =>
    api.get(`/restaurants/${id}`);