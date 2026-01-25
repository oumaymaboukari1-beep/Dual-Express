
import api from "./axiosConfig";

export const getRestaurants = () => api.get("/restaurants");
export const getRestaurant = (id) => api.get(`/restaurants/${id}`);
export const addRestaurant = (data) => api.post("/restaurants", data);
export const updateRestaurant = (id, data) => api.put(`/restaurants/${id}`, data);
export const deleteRestaurant = (id) => api.delete(`/restaurants/${id}`);
