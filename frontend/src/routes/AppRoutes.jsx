import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

// Auth
import Login from "../pages/auth/Login.jsx";

// Dashboard
import Dashboard from "../pages/Dashboard";

// Produits
import ListeProduits from "../pages/Produit/ListeProduits";
import AjouterProduit from "../pages/Produit/AjouterProduit";
import ModifierProduit from "../pages/Produit/ModifierProduit";

// Restaurant
import GererCommandes from "../pages/dashboard/Restaurant/GererCommandes.jsx";
import RestaurantHome from "../pages/dashboard/Restaurant/RestaurantHome.jsx";
import GererProduits from "../pages/dashboard/Restaurant/GererProduits.jsx";

// Commandes
import ListeCommandes from "../pages/Commande/ListeCommandes";
import AjouterCommande from "../pages/Commande/AjouterCommande";
import ModifierCommande from "../pages/Commande/ModifierCommande";

// Client
import RestaurantList from "../pages/restaurants/RestaurantList.jsx";
import RestaurantDetails from "../pages/restaurants/RestaurantDetails.jsx";
import ListeLignesCommande from "../pages/restaurants/ListeLignesCommande";

// Paiements
import CommandeDetails from "../pages/commandes/CommandeDetails.jsx";
import Checkout from "../pages/commandes/Checkout.jsx";
import ModifierPaiement from "../pages/commandes/ModifierPaiement";

// Livreur
import ListeUtilisateurs from "../pages/dashboard/livreur/ListeUtilisateurs";
import LivreurHome from "../pages/dashboard/livreur/LivreurHome.jsx";
import MesLivraisons from "../pages/dashboard/livreur/MesLivraisons.jsx";

// Client dashboard
import MesCommandes from "../pages/dashboard/client/MesCommandes.jsx";
import ClientHome from "../pages/dashboard/client/ClientHome.jsx";
import ModifierRole from "../pages/dashboard/client/ModifierRole";

export default function AppRoutes() {
    return (
        <Routes>
            {/* ✅ AUTH (PUBLIC) */}
            <Route path="/" element={<Login />} />

            {/* ✅ APP PROTÉGÉE */}
            <Route
                element={
                    <ProtectedRoute>
                        <Layout />
                    </ProtectedRoute>
                }
            >
                {/* Dashboard */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Produits */}
                <Route path="/produits" element={<ListeProduits />} />
                <Route path="/produits/add" element={<AjouterProduit />} />
                <Route path="/produits/edit/:id" element={<ModifierProduit />} />

                {/* Restaurant */}
                <Route path="/restaurants" element={<GererCommandes />} />
                <Route path="/restaurants/add" element={<RestaurantHome />} />
                <Route path="/restaurants/edit/:id" element={<GererProduits />} />

                {/* Commandes */}
                <Route path="/commandes" element={<ListeCommandes />} />
                <Route path="/commandes/add" element={<AjouterCommande />} />
                <Route path="/commandes/edit/:id" element={<ModifierCommande />} />

                {/* Ligne commandes (client) */}
                <Route path="/ligne-commandes" element={<ListeLignesCommande />} />
                <Route path="/ligne-commandes/add" element={<RestaurantList />} />
                <Route
                    path="/ligne-commandes/edit/:id"
                    element={<RestaurantDetails />}
                />

                {/* Paiements */}
                <Route path="/paiements" element={<CommandeDetails />} />
                <Route path="/paiements/add" element={<Checkout />} />
                <Route path="/paiements/edit/:id" element={<ModifierPaiement />} />

                {/* Livreur */}
                <Route path="/utilisateurs" element={<ListeUtilisateurs />} />
                <Route path="/utilisateurs/add" element={<LivreurHome />} />
                <Route path="/utilisateurs/edit/:id" element={<MesLivraisons />} />

                {/* Client */}
                <Route path="/roles" element={<MesCommandes />} />
                <Route path="/roles/add" element={<ClientHome />} />
                <Route path="/roles/edit/:id" element={<ModifierRole />} />
            </Route>
        </Routes>
    );
}