import { useEffect, useState } from "react";
import { getCommandeById } from "../../api/commandeApi";
import { useParams } from "react-router-dom";

export default function CommandeDetails() {
    const { id } = useParams();
    const [commande, setCommande] = useState(null);

    useEffect(() => {
        getCommandeById(id).then((res) => setCommande(res.data));
    }, [id]);

    if (!commande) return <p>Chargement...</p>;

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Commande #{commande.id}</h1>
            <p>Statut : {commande.statut}</p>
            <p>Montant total : {commande.montantTotal} TND</p>

            <h2 className="mt-4 font-bold">Produits :</h2>
            <ul>
                {commande.lignes.map((l) => (
                    <li key={l.id}>
                        Produit ID : {l.produitId} — Quantité : {l.quantite} — Prix : {l.prixUnitaire}
                    </li>
                ))}
            </ul>
        </div>
    );
}