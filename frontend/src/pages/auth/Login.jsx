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
        const user = await login({ email, motDePasse });
        setUser(user);
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="p-6">
            <input
                className="input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="input"
                placeholder="Mot de passe"
                type="password"
                onChange={(e) => setMotDePasse(e.target.value)}
            />
            <button className="btn">Se connecter</button>
        </form>
    );
}