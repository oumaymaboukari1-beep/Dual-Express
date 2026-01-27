
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product">
            <h3>{product.nom}</h3>
            <p>{product.description}</p>
            <p>Prix : {product.prix} DT</p>
            <button onClick={() => addToCart(product)}>
                Ajouter au panier
            </button>
        </div>
    );
}
