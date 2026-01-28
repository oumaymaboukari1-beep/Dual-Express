// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export default function ProtectedRoute({ children }) {
    const user = useUserStore((s) => s.user);
    if (!user) return <Navigate to="/login" />;
    return children;
}