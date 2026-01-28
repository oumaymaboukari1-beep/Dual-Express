// src/pages/auth/Register.jsx
import { useState } from "react";
import { register } from "../../api/authApi";

export default function Register() {
    const [form, setForm] = useState({
        nom: "",
        email: "",
        motDePasse: "",
        telephone: "",
        adresse: "",
        roleId: 2, // CLIENT par défaut
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(form);
        alert("Compte créé !");
    };

    return (
        <form onSubmit={handleSubmit} className="p-6">
            <input name="nom" placeholder="Nom" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="motDePasse" placeholder="Mot de passe" type="password" onChange={handleChange} />
            <input name="telephone" placeholder="Téléphone" onChange={handleChange} />
            <input name="adresse" placeholder="Adresse" onChange={handleChange} />

            <select name="roleId" onChange={handleChange}>
                <option value={2}>Client</option>
                <option value={3}>Livreur</option>
                <option value={4}>Restaurant</option>
            </select>

            <button className="btn">Créer un compte</button>
        </form>
    );
}