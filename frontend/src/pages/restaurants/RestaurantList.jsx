// src/pages/restaurants/RestaurantList.jsx
import { useEffect, useState } from "react";
import { getRestaurants } from "../../api/restaurantApi";
import { Link } from "react-router-dom";

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants().then(setRestaurants);
    }, []);

    return (
        <div className="p-6 grid grid-cols-3 gap-6">
            {restaurants.map((r) => (
                <Link
                    key={r.id}
                    to={`/restaurant/${r.id}`}
                    className="border rounded shadow hover:shadow-lg transition"
                >
                    <img
                        src={r.imageUrl}
                        className="h-40 w-full object-cover rounded-t"
                    />
                    <div className="p-4">
                        <h3 className="font-bold text-lg">{r.nomRestaurant}</h3>
                        <p className="text-gray-600">{r.adresse}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}