import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, total, removeFromCart } = useCart();

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4">🛒 Panier</h2>

            {cart.length === 0 && (
                <p className="text-gray-500">Panier vide</p>
            )}

            <div className="space-y-4">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center"
                    >
                        <div>
                            <p className="font-semibold">{item.nom}</p>
                            <p className="text-sm text-gray-500">
                                x{item.quantity}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="font-bold">
                                {item.prix * item.quantity} DT
                            </p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 text-sm hover:underline"
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <hr className="my-4" />

            <p className="font-semibold">
                Livraison : 7 DT
            </p>
            <h3 className="font-bold text-lg">
                Total : {total + 7} DT
            </h3>

            {cart.length > 0 && (
                <Link to="/paiements/add">
                    <button className="mt-4 w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition">
                        Passer commande
                    </button>
                </Link>
            )}
        </div>
    );
}