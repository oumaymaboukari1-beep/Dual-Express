// src/routes/AppRoutes.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import RoleRoute from '../components/RoleRoute';
import useUserStore from '../store/userStore';

// Auth
<Route path="/login" element={<LoginRegister />} />
<Route path="/register" element={<LoginRegister />} />

// Pages après login
import RestaurantList from '../pages/restaurants/RestaurantList';
import RestaurantDetails from '../pages/restaurants/RestaurantDetails';

// Commandes
import Checkout from '../pages/commandes/Checkout';
import CommandeDetails from '../pages/commandes/CommandeDetails';

// Dashboards
import AdminHome from '../pages/dashboard/admin/AdminHome';
import ManageCommandes from '../pages/dashboard/admin/ManageCommandes';
import ManageRestaurants from '../pages/dashboard/admin/ManageRestaurants';
import ManageUsers from '../pages/dashboard/admin/ManageUsers';

const AppRoutes = () => {
    const fetchMe = useUserStore((s) => s.fetchMe);

    useEffect(() => {
        fetchMe();
    }, [fetchMe]);

    return (
        <Routes>

            {/* === ROUTES AUTH SANS LAYOUT === */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* === ROUTE PAR DÉFAUT === */}
            {/* / → /home (protégé → redirige vers /login si non connecté) */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* === ROUTES AVEC LAYOUT === */}
            <Route element={<Layout />}>

                {/* HOME = liste restaurants */}
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <RestaurantList />
                        </ProtectedRoute>
                    }
                />

                {/* RESTAURANTS */}
                <Route
                    path="/restaurants"
                    element={
                        <ProtectedRoute>
                            <RestaurantList />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/restaurants/:id"
                    element={
                        <ProtectedRoute>
                            <RestaurantDetails />
                        </ProtectedRoute>
                    }
                />

                {/* COMMANDES */}
                <Route
                    path="/checkout"
                    element={
                        <ProtectedRoute>
                            <Checkout />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/commandes/:id"
                    element={
                        <ProtectedRoute>
                            <CommandeDetails />
                        </ProtectedRoute>
                    }
                />

                {/* ADMIN */}
                <Route
                    path="/dashboard/admin"
                    element={
                        <RoleRoute roles={['ADMIN']}>
                            <AdminHome />
                        </RoleRoute>
                    }
                />

                <Route
                    path="/dashboard/admin/commandes"
                    element={
                        <RoleRoute roles={['ADMIN']}>
                            <ManageCommandes />
                        </RoleRoute>
                    }
                />

                <Route
                    path="/dashboard/admin/restaurants"
                    element={
                        <RoleRoute roles={['ADMIN']}>
                            <ManageRestaurants />
                        </RoleRoute>
                    }
                />

                <Route
                    path="/dashboard/admin/users"
                    element={
                        <RoleRoute roles={['ADMIN']}>
                            <ManageUsers />
                        </RoleRoute>
                    }
                />

            </Route>

            {/* 404 / fallback */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default AppRoutes;