import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import Cart from "../../components/Cart";
import { getRestaurantById } from "../../api/restaurantApi";
import { getProduitsByRestaurant } from "../../api/produitApi";
import { useRestaurantStore } from "../../store/restaurantStore";
import { useProduitStore } from "../../store/produitStore";

export default function RestaurantDetails() {
    const { id } = useParams();

    const { restaurant, setRestaurant } = useRestaurantStore();
    const { produits, setProduits } = useProduitStore();

    useEffect(() => {
        getRestaurantById(id).then((res) => setRestaurant(res.data));
        getProduitsByRestaurant(id).then((res) => setProduits(res.data));
    }, [id]);

    if (!restaurant) {
        return <p>Chargement...</p>;
    }

    return (
        <div className="grid lg:grid-cols-3 gap-8">
            {/* MENU */}
            <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-3xl shadow p-6">
                    <h1 className="text-3xl font-bold">
                        {restaurant.nomRestaurant}
                    </h1>
                    <p className="text-gray-500">
                        📍 {restaurant.adresse} • ⏱ 30 min • ⭐ 4.6
                    </p>
                </div>

                <div className="space-y-4">
                    {produits.map((p) => (
                        <ProductCard key={p.id} p={p} />
                    ))}
                </div>
            </div>

            {/* PANIER */}
            <div className="lg:sticky lg:top-24 h-fit">
                <Cart />
            </div>
        </div>
    );
}