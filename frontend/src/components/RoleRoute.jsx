// src/components/RoleRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../store/userStore";

const RoleRoute = ({ roles = [], children }) => {
    const { user, roles: userRoles, loading } = useUserStore();

    // 1️⃣ Pendant le chargement : pas de redirection
    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-xl">
                Chargement...
            </div>
        );
    }

    // 2️⃣ Non connecté → vers login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // 3️⃣ Vérification des rôles
    const isAllowed = roles.some((r) => userRoles.includes(r));

    if (!isAllowed) {
        return <Navigate to="/home" replace />;
    }

    // 4️⃣ OK → afficher la page
    return children;
};

export default RoleRoute;