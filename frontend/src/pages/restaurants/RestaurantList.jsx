import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

export default function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        api.get("/restaurants")
            .then(res => {
                console.log("Restaurants API =>", res.data);
                setRestaurants(Array.isArray(res.data) ? res.data : res.data.content || []);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Restaurants</h1>

            {restaurants.length === 0 && <p>Aucun restaurant.</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {restaurants.map(r => (
                    <Link
                        key={r.id}
                        to={`/restaurants/${r.id}`}
                        className="p-4 shadow glass rounded-xl block hover:bg-yellow-100"
                    >
                        <h2 className="font-bold text-lg">{r.nom}</h2>
                        <p>{r.adresse}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}