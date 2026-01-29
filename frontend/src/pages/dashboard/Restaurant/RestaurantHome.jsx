export default function RestaurantHome() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">
                Dashboard Restaurant 🍽
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="text-gray-500">Commandes</h3>
                    <p className="text-3xl font-bold">124</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="text-gray-500">Produits</h3>
                    <p className="text-3xl font-bold">32</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow">
                    <h3 className="text-gray-500">Revenus</h3>
                    <p className="text-3xl font-bold">3 240 DT</p>
                </div>
            </div>
        </div>
    );
}
