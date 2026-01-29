import { useEffect, useState } from "react";
import { getRestaurants } from "../../api/restaurantApi";

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getRestaurants()
            .then((data) => setRestaurants(data))
            .catch((err) => {
                console.error(err);
                setError("Erreur lors du chargement des restaurants");
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Restaurants</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {restaurants.map((r) => (
                    <div key={r.id} className="border p-4 rounded-lg">
                        <h2 className="font-semibold">{r.nomRestaurant}</h2>
                        <p className="text-sm text-gray-600">{r.adresse}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}