// src/pages/commandes/Checkout.jsx
import { useCartStore } from "../../store/cartStore.jsx";
import { useUserStore } from "../../store/userStore";
import { createCommande } from "../../api/commandeApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
    const cart = useCartStore((s) => s.items);
    const clearCart = useCartStore((s) => s.clear);
    const user = useUserStore((s) => s.user);
    const navigate = useNavigate();
    const [adresse, setAdresse] = useState("");

    const handleOrder = async () => {
        const restaurantId = cart[0].restaurantId; // même restaurant
        const lignes = cart.map((p) => ({
            produitId: p.id,
            quantite: p.quantite,
        }));

        const data = {
            utilisateurId: user.id,
            restaurantId,
            adresseLivraison: adresse,
            lignes,
        };

        const cmd = await createCommande(data);
        clearCart();
        navigate(`/commande/${cmd.id}`);
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Finaliser la commande</h1>

            <input
                placeholder="Adresse de livraison"
                className="input w-full mb-3"
                onChange={(e) => setAdresse(e.target.value)}
            />

            <button className="btn-primary" onClick={handleOrder}>
                Passer la commande
            </button>
        </div>
    );
}