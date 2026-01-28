// src/pages/dashboard/livreur/MesLivraisons.jsx
import { useEffect, useState } from "react";
import api from "../../../api/axios";

export default function MesLivraisons() {
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        api.get("/commandes").then((res) => {
            const enCours = res.data.filter((c) => c.statut === "EN_COURS");
            setCommandes(enCours);
        });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Mes livraisons</h1>

            <div className="mt-6 space-y-4">
                {commandes.map((cmd) => (
                    <div key={cmd.id} className="border rounded p-4 shadow">
                        <p>Commande #{cmd.id}</p>
                        <p>Adresse : {cmd.adresseLivraison}</p>
                        <p>Total : {cmd.montantTotal} TND</p>
                    </div>
                ))}
            </div>
        </div>
    );
}