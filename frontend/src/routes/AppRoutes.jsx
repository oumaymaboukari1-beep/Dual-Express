
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ListeProduits from "../pages/Produit/ListeProduits";
import AjouterProduit from "../pages/Produit/AjouterProduit";
import ModifierProduit from "../pages/Produit/ModifierProduit";
import ListeRestaurants from "../pages/Restaurant/ListeRestaurants";
import AjouterRestaurant from "../pages/Restaurant/AjouterRestaurant";
import ModifierRestaurant from "../pages/Restaurant/ModifierRestaurant";
import ListeCommandes from "../pages/Commande/ListeCommandes";
import AjouterCommande from "../pages/Commande/AjouterCommande";
import ModifierCommande from "../pages/Commande/ModifierCommande";
import ListeLignesCommande from "../pages/LigneCommande/ListeLignesCommande";
import AjouterLigneCommande from "../pages/LigneCommande/AjouterLigneCommande";
import ModifierLigneCommande from "../pages/LigneCommande/ModifierLigneCommande";

import ListePaiements from "../pages/Paiement/ListePaiements";
import AjouterPaiement from "../pages/Paiement/AjouterPaiement";
import ModifierPaiement from "../pages/Paiement/ModifierPaiement";

import ListeUtilisateurs from "../pages/Utilisateur/ListeUtilisateurs";
import AjouterUtilisateur from "../pages/Utilisateur/AjouterUtilisateur";
import ModifierUtilisateur from "../pages/Utilisateur/ModifierUtilisateur";

import ListeRoles from "../pages/Role/ListeRoles";
import AjouterRole from "../pages/Role/AjouterRole";
import ModifierRole from "../pages/Role/ModifierRole";





export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/produits" element={<ListeProduits />} />
            <Route path="/produits/add" element={<AjouterProduit />} />
            <Route path="/produits/edit/:id" element={<ModifierProduit />} />

            <Route path="/restaurants" element={<ListeRestaurants />} />
            <Route path="/restaurants/add" element={<AjouterRestaurant />} />
            <Route path="/restaurants/edit/:id" element={<ModifierRestaurant />} />

            <Route path="/commandes" element={<ListeCommandes />} />
            <Route path="/commandes/add" element={<AjouterCommande />} />
            <Route path="/commandes/edit/:id" element={<ModifierCommande />} />


            <Route path="/ligne-commandes" element={<ListeLignesCommande />} />
            <Route path="/ligne-commandes/add" element={<AjouterLigneCommande />} />
            <Route path="/ligne-commandes/edit/:id" element={<ModifierLigneCommande />} />

                <Route path="/paiements" element={<ListePaiements />} />
                <Route path="/paiements/add" element={<AjouterPaiement />} />
                <Route path="/paiements/edit/:id" element={<ModifierPaiement />} />

                <Route path="/utilisateurs" element={<ListeUtilisateurs />} />
                <Route path="/utilisateurs/add" element={<AjouterUtilisateur />} />
                <Route path="/utilisateurs/edit/:id" element={<ModifierUtilisateur />}/>


                <Route path="/roles" element={<ListeRoles />} />
                <Route path="/roles/add" element={<AjouterRole />} />
                <Route path="/roles/edit/:id" element={<ModifierRole />} />


        </Routes>
    );
}








