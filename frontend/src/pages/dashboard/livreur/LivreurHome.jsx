// src/pages/dashboard/livreur/LivreurHome.jsx
import { Link } from "react-router-dom";

export default function LivreurHome() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Espace Livreur 🛵</h1>

            <div className="mt-6">
                <Link className="btn-primary" to="/livreur/livraisons">
                    Voir mes livraisons
                </Link>
            </div>
        </div>
    );
}