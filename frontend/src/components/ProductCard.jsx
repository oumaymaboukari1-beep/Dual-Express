// src/components/ProductCard.jsx
import { useCartStore } from "../store/cartStore.jsx";

export default function ProductCard({ p }) {
    const addItem = useCartStore((s) => s.addItem);

    return (
        <div className="border p-4 rounded shadow">
            <h3 className="font-bold">{p.nom}</h3>
            <p>{p.description}</p>
            <p className="text-green-600">{p.prix} TND</p>

            <button
                className="btn-primary mt-2"
                onClick={() => addItem({ ...p, quantite: 1 })}
            >
                Ajouter au panier
            </button>
        </div>
    );
}