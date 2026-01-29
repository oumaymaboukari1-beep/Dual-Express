import { Link } from "react-router-dom";

export default function RestaurantCard({ r }) {
    return (
        <Link
            to={`/restaurant/${r.id}`}
            className="
        bg-white rounded-2xl overflow-hidden
        shadow hover:shadow-2xl
        hover:-translate-y-1
        transition-all duration-300
        group
      "
        >
            {/* IMAGE */}
            <div className="relative">
                <img
                    src={r.imageUrl}
                    alt={r.nomRestaurant}
                    className="h-44 w-full object-cover
                     group-hover:scale-105
                     transition-transform duration-300"
                />

                {/* BADGE */}
                <span className="
          absolute top-3 left-3
          bg-white/90 backdrop-blur
          text-xs font-semibold
          px-3 py-1 rounded-full
        ">
          ⏱ 25–35 min
        </span>
            </div>

            {/* CONTENT */}
            <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg text-gray-900">
                    {r.nomRestaurant}
                </h3>

                <p className="text-gray-500 text-sm">
                    📍 {r.adresse}
                </p>

                <div className="flex justify-between items-center pt-2">
          <span className="text-orange-500 font-semibold text-sm">
            ⭐ 4.6
          </span>

                    <span className="
            text-xs font-medium
            bg-orange-100 text-orange-600
            px-3 py-1 rounded-full
          ">
            Livraison rapide
          </span>
                </div>
            </div>
        </Link>
    );
}