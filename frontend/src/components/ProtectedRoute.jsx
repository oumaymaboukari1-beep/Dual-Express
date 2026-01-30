// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../store/userStore";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useUserStore();

    // 1️⃣ Pendant que fetchMe() vérifie la session → éviter les fausses redirections
    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-xl">
                Chargement...
            </div>
        );
    }

    // 2️⃣ Si pas connecté → redirection vers login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // 3️⃣ Si connecté → afficher la page
    return children;
};

export default ProtectedRoute;