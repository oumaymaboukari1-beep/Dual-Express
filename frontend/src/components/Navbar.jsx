import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserStore from "../store/userStore";

export default function Navbar() {
    const user = useUserStore((s) => s.user);
    const logout = useUserStore((s) => s.logout);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const roleColor = {
        CLIENT: "bg-green-100 text-green-700",
        RESTAURANT: "bg-orange-100 text-orange-700",
        LIVREUR: "bg-blue-100 text-blue-700",
        ADMIN: "bg-red-100 text-red-700",
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-red-500">
                DualExpress 🍔
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-6">
                {!user && (
                    <>
                        <Link to="/login" className="hover:text-red-500">
                            Connexion
                        </Link>
                        <Link
                            to="/register"
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            Créer un compte
                        </Link>
                    </>
                )}

                {user && (
                    <>
                        <span className="font-medium">Bonjour, {user.nom}</span>

                        <span
                            className={`text-sm px-3 py-1 rounded-full ${roleColor[user.role]}`}
                        >
              {user.role}
            </span>

                        {user.role === "CLIENT" && (
                            <Link to="/client">Espace Client</Link>
                        )}
                        {user.role === "RESTAURANT" && (
                            <Link to="/restaurant/dashboard">Restaurant</Link>
                        )}
                        {user.role === "LIVREUR" && (
                            <Link to="/livreur">Livreur</Link>
                        )}
                        {user.role === "ADMIN" && (
                            <Link to="/admin">Admin</Link>
                        )}

                        <button
                            onClick={handleLogout}
                            className="text-red-500 hover:underline"
                        >
                            Déconnexion
                        </button>
                    </>
                )}
            </div>

            {/* Mobile menu button */}
            <button
                className="md:hidden text-2xl"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/* Mobile menu */}
            {open && (
                <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 md:hidden z-50">
                    {!user && (
                        <>
                            <Link to="/login" onClick={() => setOpen(false)}>
                                Connexion
                            </Link>
                            <Link to="/register" onClick={() => setOpen(false)}>
                                Créer un compte
                            </Link>
                        </>
                    )}

                    {user && (
                        <>
                            <span>Bonjour, {user.nom}</span>

                            {user.role === "CLIENT" && <Link to="/client">Client</Link>}
                            {user.role === "RESTAURANT" && (
                                <Link to="/restaurant/dashboard">Restaurant</Link>
                            )}
                            {user.role === "LIVREUR" && <Link to="/livreur">Livreur</Link>}
                            {user.role === "ADMIN" && <Link to="/admin">Admin</Link>}

                            <button
                                onClick={handleLogout}
                                className="text-red-500 text-left"
                            >
                                Déconnexion
                            </button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
