// src/components/RestaurantCard.jsx
import { Link } from "react-router-dom";

export default function RestaurantCard({ r }) {
    return (
        <Link
            to={`/restaurant/${r.id}`}
            className="border rounded shadow hover:shadow-lg transition"
        >
            <img src={r.imageUrl} className="h-40 w-full object-cover rounded-t" />
            <div className="p-4">
                <h3 className="font-bold">{r.nomRestaurant}</h3>
                <p>{r.adresse}</p>
            </div>
        </Link>
    );
}