
import { useState } from "react";
import api from "../api/axiosConfig";

export default function Login() {
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");

    const login = async (e) => {
        e.preventDefault();
        await api.post("/auth/login", { email, motDePasse });
        window.location.href = "/dashboard";
    };

    return (
        <form onSubmit={login}>
            <h2>Connexion</h2>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setMotDePasse(e.target.value)}
            />
            <button>Se connecter</button>
        </form>
    );
}
