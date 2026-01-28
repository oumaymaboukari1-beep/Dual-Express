// src/pages/restaurants/RestaurantDetails.jsx
import { useEffect, useState } from "react";
import { getRestaurantById } from "../../api/restaurantApi";
import api from "../../api/axios";
import { useParams } from "react-router-dom";
import { useCartStore } from "../../store/cartStore.jsx";

export default function RestaurantDetails() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [produits, setProduits] = useState([]);
    const addItem = useCartStore((s) => s.addItem);

    useEffect(() => {
        getRestaurantById(id).then(setRestaurant);
        api.get(`/produits?restaurantId=${id}`).then((res) => setProduits(res.data));
    }, [id]);

    if (!restaurant) return <p>Chargement...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{restaurant.nomRestaurant}</h1>
            <p className="text-gray-600">{restaurant.description}</p>

            <div className="grid grid-cols-3 gap-4 mt-6">
                {produits.map((p) => (
                    <div key={p.id} className="border rounded p-4 shadow">
                        <h3 className="font-bold">{p.nom}</h3>
                        <p className="text-gray-600">{p.description}</p>
                        <p className="font-semibold text-green-600">{p.prix} TND</p>

                        <button
                            className="btn-primary mt-2"
                            onClick={() => addItem({ ...p, quantite: 1 })}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}