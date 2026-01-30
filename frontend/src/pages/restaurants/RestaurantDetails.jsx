import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantById } from "@api/restaurantApi";     // alias OK
import { useCartStore } from "@store/cartStore";             // alias OK

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    const { setRestaurant: setCartRestaurant, addItem } = useCartStore();

    useEffect(() => {
        const load = async () => {
            try {
                const { data } = await getRestaurantById(id);
                console.log("RestaurantData =>", data);

                setRestaurant(data);
                setCartRestaurant(data); // lie le restaurant au panier

            } catch (error) {
                console.error("Erreur chargement restaurant:", error);
            }
        };

        load();
    }, [id]);

    if (!restaurant) return <p>Chargement...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{restaurant.nom}</h1>
            <p className="text-gray-700">{restaurant.adresse}</p>
            <p className="mb-6">Type : {restaurant.type || "Restaurant"}</p>

            <h2 className="text-xl font-semibold mb-3">Produits</h2>

            {(!restaurant.produits || restaurant.produits.length === 0) && (
                <p>Aucun produit disponible pour ce restaurant.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {restaurant.produits?.map((p) => (
                    <div
                        key={p.id}
                        className="p-4 border rounded-lg shadow-sm bg-white"
                    >
                        <h3 className="text-lg font-bold">{p.nom}</h3>
                        <p>{p.description}</p>
                        <b className="block my-2">{p.prix} TND</b>

                        <button
                            onClick={() => addItem(p)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded-md"
                        >
                            Ajouter au panier
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantDetails;