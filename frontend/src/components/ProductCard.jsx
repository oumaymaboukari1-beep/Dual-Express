import { useCartStore } from "../store/cartStore.jsx";

export default function ProductCard({ p }) {
    const addItem = useCartStore((s) => s.addItem);

    return (
        <div
            className="
        flex gap-4 bg-white p-4 rounded-2xl
        shadow hover:shadow-xl
        hover:-translate-y-0.5
        transition-all duration-300
      "
        >
            {/* IMAGE */}
            <img
                src={p.imageUrl}
                alt={p.nom}
                className="w-24 h-24 rounded-xl object-cover"
            />

            {/* CONTENT */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                        {p.nom}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                        {p.description}
                    </p>
                </div>

                <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-green-600 text-lg">
            {p.prix} TND
          </span>

                    <button
                        onClick={() => addItem({ ...p, quantite: 1 })}
                        className="
              bg-orange-500 text-white
              w-10 h-10 rounded-full
              flex items-center justify-center
              text-xl font-bold
              hover:bg-orange-600
              hover:scale-110
              active:scale-95
              transition-all duration-200
            "
                        title="Ajouter au panier"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}