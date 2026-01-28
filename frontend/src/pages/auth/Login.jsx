// src/pages/auth/Login.jsx
import { useState } from "react";
import { login } from "../../api/authApi";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const setUser = useUserStore((s) => s.login);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await login({ email, motDePasse });
            setUser(user);
            navigate("/");
        } catch (err) {
            alert("Email ou mot de passe incorrect");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96">
                <h1 className="text-xl font-bold mb-4">Connexion</h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="input w-full mb-3"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    className="input w-full mb-3"
                    onChange={(e) => setMotDePasse(e.target.value)}
                />

                <button className="btn-primary w-full">Se connecter</button>
            </form>
        </div>
    );
}