// src/pages/dashboard/client/ClientHome.jsx
import { Link } from "react-router-dom";
import useUserStore from "../../../store/userStore.jsx";

export default function ClientHome() {
    const user = useUserStore((s) => s.user);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Bienvenue {user?.nom} 👋</h1>

            <div className="mt-6 space-y-4">
                <Link className="btn-primary" to="/">
                    Voir les restaurants
                </Link>

                <Link className="btn-secondary" to="/client/commandes">
                    Mes commandes
                </Link>
            </div>
        </div>
    );
}