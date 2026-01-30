// src/components/Layout.jsx
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import useUserStore from "../store/userStore";

const Layout = () => {
    const location = useLocation();
    const { user, roles, doLogout } = useUserStore();

    // Si la route est /login ou /register → pas de layout du tout
    const hideLayout =
        location.pathname === "/login" ||
        location.pathname === "/register";

    if (hideLayout) {
        return (
            <div className="min-h-screen bg-base-100 flex items-center justify-center p-6">
                <Outlet />
            </div>
        );
    }

    const isAdmin = roles.includes("ADMIN");
    const isRestaurant = roles.includes("RESTAURANT");
    const isClient = roles.includes("CLIENT");
    const isLivreur = roles.includes("LIVREUR");

    return (
        <div className="min-h-screen bg-base-100 text-white">
            <div className="drawer lg:drawer-open">
                <input id="menu-drawer" type="checkbox" className="drawer-toggle" />

                {/* NAVBAR */}
                <div className="drawer-content flex flex-col">
                    <div className="navbar bg-base-200 border-b border-white/10">
                        <div className="flex-1">
                            <label htmlFor="menu-drawer" className="btn btn-ghost lg:hidden">
                                <span className="material-icons">menu</span>
                            </label>
                            <Link to="/home" className="btn btn-ghost normal-case text-xl">
                                DualExpress
                            </Link>
                        </div>

                        <div className="flex-none gap-2 pr-4">
                            {isClient && (
                                <Link to="/checkout" className="btn btn-primary btn-sm">
                                    Panier
                                </Link>
                            )}

                            {user && (
                                <button
                                    onClick={doLogout}
                                    className="btn btn-error btn-sm text-white"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                        <Outlet />
                    </div>
                </div>

                {/* SIDEBAR */}
                <div className="drawer-side">
                    <label htmlFor="menu-drawer" className="drawer-overlay"></label>
                    <aside className="w-72 bg-base-200 border-r border-white/10 p-4">
                        <div className="text-sm opacity-70 mb-4">Dashboards</div>

                        <ul className="menu">

                            {isAdmin && (
                                <>
                                    <li><Link to="/dashboard/admin">Admin</Link></li>
                                    <li><Link to="/dashboard/admin/commandes">Commandes</Link></li>
                                    <li><Link to="/dashboard/admin/restaurants">Restaurants</Link></li>
                                    <li><Link to="/dashboard/admin/users">Utilisateurs</Link></li>
                                </>
                            )}

                            {isRestaurant && (
                                <>
                                    <li><Link to="/dashboard/restaurant">Restaurant</Link></li>
                                    <li><Link to="/dashboard/restaurant/commandes">Gérer commandes</Link></li>
                                    <li><Link to="/dashboard/restaurant/produits">Gérer produits</Link></li>
                                </>
                            )}

                            {isLivreur && (
                                <>
                                    <li><Link to="/dashboard/livreur">Livreur</Link></li>
                                    <li><Link to="/dashboard/livreur/mes-livraisons">Mes livraisons</Link></li>
                                </>
                            )}

                            {isClient && (
                                <>
                                    <li><Link to="/dashboard/client">Client</Link></li>
                                    <li><Link to="/dashboard/client/mes-commandes">Mes commandes</Link></li>
                                </>
                            )}

                            <div className="divider"></div>

                            <li><Link to="/restaurants">Restaurants</Link></li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Layout;