export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
            <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Créer un compte 🍕
                </h2>

                <form className="space-y-4">
                    <input
                        placeholder="Nom"
                        className="w-full p-3 border rounded-xl"
                    />
                    <input
                        placeholder="Email"
                        className="w-full p-3 border rounded-xl"
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        className="w-full p-3 border rounded-xl"
                    />

                    <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600">
                        S’inscrire
                    </button>
                </form>
            </div>
        </div>
    );
}
