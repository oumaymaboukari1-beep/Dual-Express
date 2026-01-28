// src/pages/dashboard/admin/AdminHome.jsx
import { Link } from "react-router-dom";

export default function AdminHome() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Dashboard Admin 🛠️</h1>

            <div className="mt-6 flex flex-col gap-4">
                <Link className="btn-primary w-64" to="/admin/users">
                    Gérer les utilisateurs
                </Link>
                <Link className="btn-primary w-64" to="/admin/restaurants">
                    Gérer les restaurants
                </Link>
                <Link className="btn-primary w-64" to="/admin/commandes">
                    Gérer les commandes
                </Link>
            </div>
        </div>
    );
}