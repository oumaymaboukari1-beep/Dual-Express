// src/pages/dashboard/restaurant/GererCommandes.jsx
import { useEffect, useState } from "react";
import api from "../../../api/axios";
import { useUserStore } from "../../../store/userStore";

export default function GererCommandes() {
    const user = useUserStore((s) => s.user);
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        api.get("/commandes").then((res) => {
            const filtered = res.data.filter(
                (c) => c.restaurantId === user.id
            );
            setCommandes(filtered);
        });
    }, [user]);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Commandes reçues</h1>

            <div className="mt-6 space-y-4">
                {commandes.map((cmd) => (
                    <div key={cmd.id} className="border rounded p-4 shadow">
                        <p>Commande #{cmd.id}</p>
                        <p>Client ID : {cmd.utilisateurId}</p>
                        <p>Statut : {cmd.statut}</p>
                        <p>Total : {cmd.montantTotal} TND</p>
                    </div>
                ))}
            </div>
        </div>
    );
}