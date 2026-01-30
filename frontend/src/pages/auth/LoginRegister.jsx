import React, { useState } from "react";
import { login, register as apiRegister, me } from "../../api/authApi";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
    const [mode, setMode] = useState("login");

    const [form, setForm] = useState({
        nom: "",
        email: "",
        password: "",
        telephone: "",
        adresse: "",
        roleId: 1, // CLIENT par défaut
    });

    const [error, setError] = useState("");

    const setUser = useUserStore((s) => s.setUser);
    const navigate = useNavigate();

    const roles = [
        { id: 1, label: "CLIENT" },
        { id: 2, label: "LIVREUR" },
        { id: 3, label: "RESTAURANT" },
        { id: 4, label: "ADMIN" },
    ];

    const onChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            if (mode === "login") {
                await login({
                    username: form.email, // identifiant = email
                    password: form.password,
                });
            } else {
                const roleLabel = roles.find((r) => r.id === form.roleId).label;

                await apiRegister({
                    username: form.email,
                    password: form.password,
                    email: form.email,
                    fullName: form.nom,
                    roles: [roleLabel],
                });

                await login({
                    username: form.email,
                    password: form.password,
                });
            }

            const { data } = await me();
            setUser(data);
            navigate("/home");

        } catch (err) {
            setError(err?.response?.data?.message || "Erreur, réessayez");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-yellow-500">
                        DualExpress
                    </h1>
                </div>

                {/* Switch login/register */}
                <div className="flex justify-between mb-6 bg-gray-200 rounded-full p-1">
                    <button
                        onClick={() => setMode("login")}
                        className={`w-1/2 py-2 rounded-full font-semibold ${
                            mode === "login"
                                ? "bg-yellow-400 text-black"
                                : "text-gray-500"
                        }`}
                    >
                        Connexion
                    </button>

                    <button
                        onClick={() => setMode("register")}
                        className={`w-1/2 py-2 rounded-full font-semibold ${
                            mode === "register"
                                ? "bg-yellow-400 text-black"
                                : "text-gray-500"
                        }`}
                    >
                        Inscription
                    </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">

                    {/* LOGIN */}
                    {mode === "login" && (
                        <>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                                onChange={onChange}
                            />

                            <input
                                name="password"
                                type="password"
                                placeholder="Mot de passe"
                                className="input input-bordered w-full"
                                onChange={onChange}
                            />
                        </>
                    )}

                    {/* REGISTER */}
                    {mode === "register" && (
                        <>
                            <input
                                name="nom"
                                type="text"
                                placeholder="Nom complet"
                                className="input input-bordered w-full"
                                onChange={onChange}
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                                onChange={onChange}
                            />

                            <input
                                name="password"
                                type="password"
                                placeholder="Mot de passe"
                                className="input input-bordered w-full"
                                onChange={onChange}
                            />

                            <input
                                name="telephone"
                                type="text"
                                placeholder="Téléphone"
                                className="input input-bordered w-full"
                                onChange={onChange}
                            />

                            <input
                                name="adresse"
                                type="text"
                                placeholder="Adresse"
                                className="input input-bordered w-full"
                                onChange={onChange}
                            />

                            {/* ROLES */}
                            <div className="mt-4">
                                <label className="block mb-2 font-semibold text-gray-700">
                                    Choisir un rôle :
                                </label>

                                <div className="space-y-2">
                                    {roles.map((r) => (
                                        <label
                                            key={r.id}
                                            className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg cursor-pointer border hover:border-yellow-400"
                                        >
                                            <input
                                                type="radio"
                                                name="roleId"
                                                value={r.id}
                                                checked={form.roleId === r.id}
                                                onChange={() =>
                                                    setForm((f) => ({
                                                        ...f,
                                                        roleId: r.id,
                                                    }))
                                                }
                                            />
                                            <span>{r.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="btn w-full bg-yellow-400 hover:bg-yellow-500 text-black rounded-full"
                    >
                        {mode === "login"
                            ? "Se connecter"
                            : "Créer un compte"}
                    </button>
                </form>
            </div>
        </div>
    );
}