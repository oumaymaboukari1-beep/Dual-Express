// src/components/CartSummary.jsx
import { useCartStore } from "../store/cartStore.jsx";
import { Link } from "react-router-dom";

export default function CartSummary() {
    const items = useCartStore((s) => s.items);

    const total = items.reduce(
        (acc, p) => acc + p.prix * p.quantite,
        0
    );

    return (
        <div className="fixed bottom-6 right-6 bg-white p-4 rounded shadow">
            <p>Total : {total} TND</p>
            <Link to="/checkout" className="btn-primary mt-2 block">
                Payer
            </Link>
        </div>
    );
}