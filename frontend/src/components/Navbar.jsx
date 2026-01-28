// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export default function Navbar() {
    const user = useUserStore((s) => s.user);
    const logout = useUserStore((s) => s.logout);

    return (
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">DualExpress</Link>

            <div className="flex items-center gap-4">
                {!user && (
                    <>
                        <Link to="/login">Connexion</Link>
                        <Link to="/register">Créer un compte</Link>
                    </>
                )}

                {user && (
                    <>
                        <span>Bonjour, {user.nom}</span>

                        {/* Redirection selon rôle */}
                        {user.role === "CLIENT" && (
                            <Link to="/client">Espace Client</Link>
                        )}
                        {user.role === "RESTAURANT" && (
                            <Link to="/restaurant/dashboard">Espace Restaurant</Link>
                        )}
                        {user.role === "LIVREUR" && (
                            <Link to="/livreur">Espace Livreur</Link>
                        )}
                        {user.role === "ADMIN" && (
                            <Link to="/admin">Espace Admin</Link>
                        )}

                        <button className="text-red-500" onClick={logout}>
                            Déconnexion
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}