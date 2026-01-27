
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, total, removeFromCart } = useCart();

    return (
        <div>
            <h2>Panier</h2>

            {cart.length === 0 && <p>Votre panier est vide.</p>}

            {cart.map((item) => (
                <div key={item.id}>
                    <h4>{item.nom}</h4>
                    <p>Quantité : {item.quantity}</p>
                    <p>Sous-total : {item.quantity * item.prix} DT</p>
                    <button onClick={() => removeFromCart(item.id)}>
                        Supprimer
                    </button>
                </div>
            ))}

            <h3>Total : {total + 7} DT (frais livraison inclus)</h3>

            {cart.length > 0 && (
                <Link to="/checkout">
                    <button>Passer commande</button>
                </Link>
            )}
        </div>
    );
}
