
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import Dashboard from "../pages/Dashboard";
import ListeProduits from "../pages/Produit/ListeProduits";
import AjouterProduit from "../pages/Produit/AjouterProduit";
import ModifierProduit from "../pages/Produit/ModifierProduit";
import GererCommandes from "../pages/dashboard/Restaurant/GererCommandes.jsx";
import RestaurantHome from "../pages/dashboard/Restaurant/RestaurantHome.jsx";
import GererProduits from "../pages/dashboard/Restaurant/GererProduits.jsx";
import ListeCommandes from "../pages/Commande/ListeCommandes";
import AjouterCommande from "../pages/Commande/AjouterCommande";
import ModifierCommande from "../pages/Commande/ModifierCommande";
import ListeLignesCommande from "../pages/restaurants/ListeLignesCommande";
import RestaurantList from "../pages/restaurants/RestaurantList.jsx";
import RestaurantDetails from "../pages/restaurants/RestaurantDetails.jsx";

import ListePaiements from "../pages/commandes/CommandeDetails.jsx";
import Checkout from "../pages/commandes/Checkout.jsx";
import ModifierPaiement from "../pages/commandes/ModifierPaiement";

import ListeUtilisateurs from "../pages/dashboard/livreur/ListeUtilisateurs";
import LivreurHome from "../pages/dashboard/livreur/LivreurHome.jsx";
import MesLivraisons from "../pages/dashboard/livreur/MesLivraisons.jsx";

import MesCommandes from "../pages/dashboard/client/MesCommandes.jsx";
import ClientHome from "../pages/dashboard/client/ClientHome.jsx";
import ModifierRole from "../pages/dashboard/client/ModifierRole";





export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/produits" element={<ListeProduits />} />
            <Route path="/produits/add" element={<AjouterProduit />} />
            <Route path="/produits/edit/:id" element={<ModifierProduit />} />

            <Route path="/restaurants" element={<GererCommandes />} />
            <Route path="/restaurants/add" element={<RestaurantHome />} />
            <Route path="/restaurants/edit/:id" element={<GererProduits />} />

            <Route path="/commandes" element={<ListeCommandes />} />
            <Route path="/commandes/add" element={<AjouterCommande />} />
            <Route path="/commandes/edit/:id" element={<ModifierCommande />} />


            <Route path="/ligne-commandes" element={<ListeLignesCommande />} />
            <Route path="/ligne-commandes/add" element={<RestaurantList />} />
            <Route path="/ligne-commandes/edit/:id" element={<RestaurantDetails />} />

                <Route path="/paiements" element={<ListePaiements />} />
                <Route path="/paiements/add" element={<Checkout />} />
                <Route path="/paiements/edit/:id" element={<ModifierPaiement />} />

                <Route path="/utilisateurs" element={<ListeUtilisateurs />} />
                <Route path="/utilisateurs/add" element={<LivreurHome />} />
                <Route path="/utilisateurs/edit/:id" element={<MesLivraisons />}/>


                <Route path="/roles" element={<MesCommandes />} />
                <Route path="/roles/add" element={<ClientHome />} />
                <Route path="/roles/edit/:id" element={<ModifierRole />} />


        </Routes>
    );
}








