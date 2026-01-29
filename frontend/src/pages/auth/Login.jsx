export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
            <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Connexion 🍔
                </h2>

                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        type="password"
                        placeholder="Mot de passe"
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition">
                        Se connecter
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Pas encore de compte ?{" "}
                    <a href="/register" className="text-orange-500">
                        Créer un compte
                    </a>
                </p>
            </div>
        </div>
    );
}