import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";
import { useCartStore } from "../../store/cartStore";
import { createCommande } from "../../api/commandeApi";
import { payerCommande } from "../../api/paiementApi";

const Checkout = () => {
    const navigate = useNavigate();

    const { user } = useUserStore();           // <-- CORRIGÉ
    const { items = [], restaurant, clear } = useCartStore();

    const [adresseLivraison, setAdresseLivraison] = useState("");
    const [methodePaiement, setMethodePaiement] = useState("ESPECE");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Sécurisation : items toujours tableau
    const lignesPayload = useMemo(() => {
        if (!Array.isArray(items)) return [];
        return items.map(it => ({
            produitId: it.produit?.id,
            quantite: it.quantite
        }));
    }, [items]);

    const canSubmit =
        user &&
        restaurant &&
        lignesPayload.length > 0 &&
        adresseLivraison.trim() !== "";

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!canSubmit) return;

        setLoading(true);
        setError("");

        try {
            // 1) Création commande
            const { data: commande } = await createCommande({
                utilisateurId: user.id,
                restaurantId: restaurant.id,
                adresseLivraison,
                lignes: lignesPayload
            });

            if (!commande || !commande.id) {
                throw new Error("Commande invalide");
            }

            // 2) Paiement
            await payerCommande({
                commandeId: commande.id,
                methodePaiement
            });

            // 3) Vider panier
            clear();

            // 4) Redirection
            navigate(`/commandes/${commande.id}`);

        } catch (err) {
            console.error("Erreur checkout:", err);
            setError(err?.response?.data?.message || "Erreur lors de la commande/paiement");
        } finally {
            setLoading(false);
        }
    };

    // Si pas de restaurant sélectionné
    if (!restaurant) {
        return <p style={{ color: "red" }}>Aucun restaurant sélectionné.</p>;
    }

    return (
        <div>
            <h2>Checkout</h2>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Adresse de livraison</label>
                    <input
                        value={adresseLivraison}
                        onChange={(e) => setAdresseLivraison(e.target.value)}
                    />
                </div>

                <div>
                    <label>Mode de paiement</label>
                    <select
                        value={methodePaiement}
                        onChange={(e) => setMethodePaiement(e.target.value)}
                    >
                        <option value="ESPECE">Espèce</option>
                        <option value="CARTE_BANCAIRE">Carte bancaire</option>
                        <option value="CARTE_SODEXO">Carte Sodexo</option>
                    </select>
                </div>

                <button type="submit" disabled={!canSubmit || loading}>
                    {loading ? "Traitement..." : "Confirmer"}
                </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Checkout;