export default function Checkout() {
    return (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow">
            <h2 className="text-2xl font-bold mb-6">
                💳 Paiement
            </h2>

            <form className="space-y-4">
                <input
                    placeholder="Adresse de livraison"
                    className="w-full p-3 border rounded-xl"
                />

                <select className="w-full p-3 border rounded-xl">
                    <option>Carte bancaire</option>
                    <option>Espèces</option>
                </select>

                <button className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition">
                    Confirmer la commande
                </button>
            </form>
        </div>
    );
}