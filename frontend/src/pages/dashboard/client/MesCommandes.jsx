// src/pages/dashboard/client/MesCommandes.jsx
import { useEffect, useState } from "react";
import api from "../../../api/axios";
import useUserStore from "../../../store/userStore.jsx";
import { Link } from "react-router-dom";

export default function MesCommandes() {
    const user = useUserStore((s) => s.user);
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        api.get("/commandes").then((res) => {
            const filtered = res.data.filter((c) => c.utilisateurId === user.id);
            setCommandes(filtered);
        });
    }, [user]);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Mes commandes</h1>

            <div className="mt-6 space-y-4">
                {commandes.map((cmd) => (
                    <div key={cmd.id} className="border rounded p-4 shadow">
                        <p>Commande #{cmd.id}</p>
                        <p>Statut : {cmd.statut}</p>
                        <p>Total : {cmd.montantTotal} TND</p>

                        <Link className="btn-primary mt-2" to={`/commande/${cmd.id}`}>
                            Voir les détails
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}