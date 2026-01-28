
import { useEffect, useState } from "react";
import {
    getLigneCommande,
    updateLigneCommande,
} from "../../api/ligneCommandeApi";
import { Box, Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

export default function RestaurantDetails() {
    const { id } = useParams();

    const [form, setForm] = useState({
        quantite: "",
        prix: "",
        commandeId: "",
        produitId: "",
    });

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await getLigneCommande(id);
        setForm(res.data);
    };

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateLigneCommande(id, form);
        window.location.href = "/ligne-commandes";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Modifier Ligne de Commande</h2>

            <form onSubmit={handleSubmit}>
                <TextField
                    name="quantite"
                    type="number"
                    value={form.quantite}
                    onChange={handleChange}
                    label="Quantité"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    name="prix"
                    type="number"
                    value={form.prix}
                    onChange={handleChange}
                    label="Prix (DT)"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    name="commandeId"
                    type="number"
                    value={form.commandeId}
                    onChange={handleChange}
                    label="Commande ID"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    name="produitId"
                    type="number"
                    value={form.produitId}
                    onChange={handleChange}
                    label="Produit ID"
                    fullWidth
                    margin="normal"
                />

                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Modifier
                </Button>
            </form>
        </Box>
    );
}
