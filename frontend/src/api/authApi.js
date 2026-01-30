import api from './axios';

export const register = (payload) => api.post('/auth/register', payload);
export const login = (payload) => api.post('/auth/login', payload); // { username, password }
export const me = () => api.get('/auth/me');
export const logout = () => api.post('/auth/logout');