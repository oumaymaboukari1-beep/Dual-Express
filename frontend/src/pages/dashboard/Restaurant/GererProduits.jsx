// src/pages/dashboard/restaurant/GererProduits.jsx
import { useEffect, useState } from "react";
import api from "../../../api/axios";
import { useUserStore } from "../../../store/userStore";

export default function GererProduits() {
    const [produits, setProduits] = useState([]);
    const [form, setForm] = useState({
        nom: "",
        description: "",
        prix: "",
        categorie: "PLAT",
        disponible: true,
    });

    const user = useUserStore((s) => s.user);

    const loadProduits = () => {
        api.get("/produits").then((res) => {
            const filtered = res.data.filter(
                (p) => p.restaurantId === user.id
            );
            setProduits(filtered);
        });
    };

    useEffect(() => {
        loadProduits();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await api.post("/produits", {
            ...form,
            prix: parseFloat(form.prix),
            restaurantId: user.id,
        });

        loadProduits();
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Gérer mes produits</h1>

            <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-2 gap-4">
                <input name="nom" placeholder="Nom" className="input" onChange={(e) => setForm({ ...form, nom: e.target.value })} />
                <input name="prix" placeholder="Prix" className="input" onChange={(e) => setForm({ ...form, prix: e.target.value })} />
                <input name="description" placeholder="Description" className="input col-span-2" onChange={(e) => setForm({ ...form, description: e.target.value })} />

                <select
                    className="input"
                    onChange={(e) => setForm({ ...form, categorie: e.target.value })}
                >
                    <option value="PLAT">Plat</option>
                    <option value="BOISSON">Boisson</option>
                    <option value="DESSERT">Dessert</option>
                    <option value="AUTRE">Autre</option>
                </select>

                <button className="btn-primary col-span-2">Ajouter produit</button>
            </form>

            <div className="mt-6">
                <h2 className="font-bold">Mes produits :</h2>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {produits.map((p) => (
                        <div key={p.id} className="border p-4 rounded shadow">
                            <h3 className="font-bold">{p.nom}</h3>
                            <p>{p.description}</p>
                            <p className="text-green-600">{p.prix} TND</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}