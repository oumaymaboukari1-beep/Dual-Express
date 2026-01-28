import { useEffect, useState } from "react";
import api from "../../../api/axios";

export default function ManageUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get("/utilisateurs").then((res) => setUsers(res.data));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Liste des utilisateurs</h2>
            <table className="table-auto w-full mt-4">
                <thead>
                <tr>
                    <th>Nom</th><th>Email</th><th>Rôle</th>
                </tr>
                </thead>
                <tbody>
                {users.map((u) => (
                    <tr key={u.id}>
                        <td>{u.nom}</td>
                        <td>{u.email}</td>
                        <td>{u.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}