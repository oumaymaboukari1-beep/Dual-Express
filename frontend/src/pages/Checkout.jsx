
import { useCart } from "../context/CartContext";
import { api } from "../api/api";
import { useState } from "react";

export default function Checkout() {
    const { cart, clearCart, total } = useCart();
    const [adresse, setAdresse] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("ESPECE");

    const handleCheckout = async () => {
        const utilisateurId = 1; // ID utilisateur connecté
        const restaurantId = cart[0].restaurantId;

        // 1️⃣ Créer la commande
        const commande = await api.post("/commandes", {
            utilisateurId,
            restaurantId,
            adresseLivraison: adresse,
            lignes: [],
        });

        const commandeId = commande.data.id;

        // 2️⃣ Ajouter chaque ligne
        for (const item of cart) {
            await api.post(`/lignes/${commandeId}`, {
                produitId: item.id,
                quantite: item.quantity,
            });
        }

        // 3️⃣ Payer
        await api.post("/paiements", {
            commandeId,
            methodePaiement: paymentMethod,
        });

        alert("Commande et paiement effectués !");
        clearCart();
    };

    return (
        <div>
            <h2>Finalisation de la commande</h2>

            <label>Adresse de livraison :</label>
            <input
                type="text"
                onChange={(e) => setAdresse(e.target.value)}
            />

            <h3>Méthode de paiement :</h3>

            <select onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="ESPECE">Espèce à la livraison</option>
                <option value="CARTE_BANCAIRE">Carte Bancaire</option>
                <option value="PLUXEE">Carte Pluxee</option>
            </select>

            <h3>Total à payer : {total + 7} DT</h3>

            <button onClick={handleCheckout}>Confirmer</button>
        </div>
    );
}
