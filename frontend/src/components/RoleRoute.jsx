// src/components/RoleRoute.jsx
import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export default function RoleRoute({ roles, children }) {
    const user = useUserStore((s) => s.user);

    if (!user) return <Navigate to="/login" />;

    if (!roles.includes(user.role)) return <Navigate to="/" />;

    return children;
}