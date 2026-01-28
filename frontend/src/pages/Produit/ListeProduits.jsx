// src/pages/products/ProductList.jsx
import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function ProductList() {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        api.get("/produits").then((res) => setProduits(res.data));
    }, []);

    return (
        <div className="p-6 grid grid-cols-3 gap-6">
            {produits.map((p) => (
                <div key={p.id} className="border rounded p-4 shadow">
                    <h3 className="font-bold">{p.nom}</h3>
                    <p>{p.description}</p>
                    <p className="text-green-600">{p.prix} TND</p>
                </div>
            ))}
        </div>
    );
}