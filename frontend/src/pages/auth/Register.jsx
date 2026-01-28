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

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(form);
            alert("Compte créé avec succès !");
        } catch (err) {
            alert("Erreur lors de la création du compte");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-96">
                <h1 className="text-xl font-bold mb-4">Créer un compte</h1>

                <input name="nom" placeholder="Nom" className="input w-full mb-3" onChange={handleChange} />
                <input name="email" placeholder="Email" className="input w-full mb-3" onChange={handleChange} />
                <input name="motDePasse" type="password" placeholder="Mot de passe" className="input w-full mb-3" onChange={handleChange} />
                <input name="telephone" placeholder="Téléphone" className="input w-full mb-3" onChange={handleChange} />
                <input name="adresse" placeholder="Adresse" className="input w-full mb-3" onChange={handleChange} />

                <select name="roleId" className="input w-full mb-3" onChange={handleChange}>
                    <option value={2}>Client</option>
                    <option value={3}>Livreur</option>
                    <option value={4}>Restaurant</option>
                </select>

                <button className="btn-primary w-full">Créer un compte</button>
            </form>
        </div>
    );
}