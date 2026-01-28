// src/pages/dashboard/admin/ManageUsers.jsx
import { useEffect, useState } from "react";
import api from "../../../api/axios";

export default function ManageUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get("/utilisateurs").then((res) => setUsers(res.data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Gestion des Utilisateurs</h1>

            <table className="table-auto w-full mt-6 border">
                <thead className="bg-gray-200">
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Adresse</th>
                    <th>Rôle</th>
                </tr>
                </thead>

                <tbody>
                {users.map((u) => (
                    <tr key={u.id} className="border">
                        <td>{u.nom}</td>
                        <td>{u.email}</td>
                        <td>{u.telephone}</td>
                        <td>{u.adresse}</td>
                        <td>{u.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}