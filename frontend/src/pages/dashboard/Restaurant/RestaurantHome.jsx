// src/pages/dashboard/restaurant/RestaurantHome.jsx
import { Link } from "react-router-dom";
import { useUserStore } from "../../../store/userStore";

export default function RestaurantHome() {
    const user = useUserStore((s) => s.user);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Espace Restaurant 🍽️</h1>
            <p className="mt-2">Gérez vos produits et vos commandes.</p>

            <div className="mt-6 space-y-4">
                <Link className="btn-primary" to="/restaurant/produits">
                    Gérer mes produits
                </Link>

                <Link className="btn-secondary" to="/restaurant/commandes">
                    Gérer mes commandes
                </Link>
            </div>
        </div>
    );
}