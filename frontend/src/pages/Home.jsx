import RestaurantList from "./restaurants/RestaurantList";

export default function Home() {
    return (<div>
        <h1 className="text-5xl text-red-500 font-bold">
            TEST TAILWIND
        </h1>
        <div className="space-y-16 animate-fade-in">

            {/* ✅ HERO SECTION */}
            <section className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-10 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* TEXTE */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                            Livraison rapide de vos plats préférés 🍔🍕
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg">
                            Commandez chez les meilleurs restaurants près de chez vous et
                            recevez votre repas en quelques minutes.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button
                                className="bg-orange-500 text-white px-6 py-3 rounded-full
                           hover:bg-orange-600 hover:scale-105 active:scale-95
                           transition-all duration-200"
                            >
                                Commander maintenant
                            </button>

                            <button
                                className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full
                           hover:bg-orange-50 hover:scale-105 active:scale-95
                           transition-all duration-200"
                            >
                                Voir restaurants
                            </button>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                            alt="Food"
                            className="rounded-3xl shadow-xl
                         hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                </div>
            </section>

            {/* ✅ RESTAURANTS */}
            <section>
                <h2 className="text-3xl font-bold mb-8">
                    🍽 Restaurants populaires
                </h2>

                {/* Les animations des cartes sont dans RestaurantCard.jsx */}
                <RestaurantList />
            </section>

        </div>
        </div>
    );
}