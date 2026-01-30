// src/store/userStore.js
import { create } from 'zustand';
import { me, logout } from '../api/authApi';

const useUserStore = create((set, get) => ({
    user: null,
    roles: [],
    loading: false,

    setUser: (user) => set({ user, roles: user?.roles || [] }),

    fetchMe: async () => {
        try {
            set({ loading: true });
            const { data } = await me();
            set({
                user: data,
                roles: data?.roles || [],
                loading: false
            });
        } catch (e) {
            set({
                user: null,
                roles: [],
                loading: false
            });
        }
    },

    doLogout: async () => {
        await logout();
        set({ user: null, roles: [] });
    },

    isAuthenticated: () => !!get().user,
    hasRole: (role) => get().roles?.includes(role)
}));

export default useUserStore;
