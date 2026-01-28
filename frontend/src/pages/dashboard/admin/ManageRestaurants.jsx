// src/pages/dashboard/admin/ManageRestaurants.jsx
import { useEffect, useState } from "react";
import api from "../../../api/axios";

export default function ManageRestaurants() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        api.get("/restaurants").then((res) => setRestaurants(res.data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Gestion des Restaurants</h1>

            <div className="grid grid-cols-3 gap-4 mt-6">
                {restaurants.map((r) => (
                    <div key={r.id} className="border rounded p-4 shadow">
                        <h3 className="font-bold text-lg">{r.nomRestaurant}</h3>
                        <p>{r.adresse}</p>
                        <p>{r.telephone}</p>
                        <p className="text-sm text-gray-600">{r.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}