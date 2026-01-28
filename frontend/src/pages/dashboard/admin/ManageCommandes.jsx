// src/pages/dashboard/admin/ManageCommandes.jsx
import { useEffect, useState } from "react";
import api from "../../../api/axios";

export default function ManageCommandes() {
    const [commandes, setCommandes] = useState([]);

    useEffect(() => {
        api.get("/commandes").then((res) => setCommandes(res.data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Gestion des Commandes</h1>

            <table className="table-auto w-full mt-6 border">
                <thead className="bg-gray-200">
                <tr>
                    <th>ID</th>
                    <th>Client</th>
                    <th>Restaurant</th>
                    <th>Montant</th>
                    <th>Statut</th>
                </tr>
                </thead>

                <tbody>
                {commandes.map((c) => (
                    <tr key={c.id} className="border">
                        <td>{c.id}</td>
                        <td>{c.utilisateurId}</td>
                        <td>{c.restaurantId}</td>
                        <td>{c.montantTotal}</td>
                        <td>{c.statut}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}