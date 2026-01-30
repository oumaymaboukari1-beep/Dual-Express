// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// AUTH
import LoginRegister from "./pages/auth/LoginRegister";

// PUBLIC
import RestaurantList from "./pages/restaurants/RestaurantList";
import RestaurantDetails from "./pages/restaurants/RestaurantDetails";

// CHECKOUT
import Checkout from "./pages/commandes/Checkout";
import CommandeDetails from "./pages/commandes/CommandeDetails";

// CLIENT
import ClientHome from "./pages/dashboard/client/ClientHome";
import MesCommandes from "./pages/dashboard/client/MesCommandes";

// ADMIN
import AdminHome from "./pages/dashboard/admin/AdminHome";
import ManageUsers from "./pages/dashboard/admin/ManageUsers";
import ManageRestaurants from "./pages/dashboard/admin/ManageRestaurants";
import ManageCommandes from "./pages/dashboard/admin/ManageCommandes";

// RESTAURANT
import RestaurantHome from "./pages/dashboard/restaurant/RestaurantHome";
import GererProduits from "./pages/dashboard/restaurant/GererProduits";
import GererCommandes from "./pages/dashboard/restaurant/GererCommandes";

// LIVREUR
import LivreurHome from "./pages/dashboard/livreur/LivreurHome";
import MesLivraisons from "./pages/dashboard/livreur/MesLivraisons";

// ROLE ROUTE
import RoleRoute from "./components/RoleRoute";

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                {/* LOGIN / REGISTER */}
                <Route path="/" element={<LoginRegister />} />
                <Route path="/login" element={<LoginRegister />} />
                <Route path="/register" element={<LoginRegister />} />

                {/* HOME AFTER LOGIN */}
                <Route path="/home" element={<RestaurantList />} />

                {/* PUBLIC */}
                <Route path="/restaurants/:id" element={<RestaurantDetails />} />

                {/* CHECKOUT */}
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/commande/:id" element={<CommandeDetails />} />

                {/* CLIENT */}
                <Route
                    path="/client"
                    element={
                        <RoleRoute roles={["CLIENT"]}>
                            <ClientHome />
                        </RoleRoute>
                    }
                />
                <Route
                    path="/client/commandes"
                    element={
                        <RoleRoute roles={["CLIENT"]}>
                            <MesCommandes />
                        </RoleRoute>
                    }
                />

                {/* RESTAURANT */}
                <Route
                    path="/restaurant/dashboard"
                    element={
                        <RoleRoute roles={["RESTAURANT"]}>
                            <RestaurantHome />
                        </RoleRoute>
                    }
                />
                <Route
                    path="/restaurant/produits"
                    element={
                        <RoleRoute roles={["RESTAURANT"]}>
                            <GererProduits />
                        </RoleRoute>
                    }
                />
                <Route
                    path="/restaurant/commandes"
                    element={
                        <RoleRoute roles={["RESTAURANT"]}>
                            <GererCommandes />
                        </RoleRoute>
                    }
                />

                {/* LIVREUR */}
                <Route
                    path="/livreur"
                    element={
                        <RoleRoute roles={["LIVREUR"]}>
                            <LivreurHome />
                        </RoleRoute>
                    }
                />
                <Route
                    path="/livreur/livraisons"
                    element={
                        <RoleRoute roles={["LIVREUR"]}>
                            <MesLivraisons />
                        </RoleRoute>
                    }
                />

                {/* ADMIN */}
                <Route
                    path="/admin"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <AdminHome />
                        </RoleRoute>
                    }
                />
                <Route
                    path="/admin/users"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <ManageUsers />
                        </RoleRoute>
                    }
                />
                <Route
                    path="/admin/restaurants"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <ManageRestaurants />
                        </RoleRoute>
                    }
                />
                <Route
                    path="/admin/commandes"
                    element={
                        <RoleRoute roles={["ADMIN"]}>
                            <ManageCommandes />
                        </RoleRoute>
                    }
                />
            </Routes>
        </>
    );
}