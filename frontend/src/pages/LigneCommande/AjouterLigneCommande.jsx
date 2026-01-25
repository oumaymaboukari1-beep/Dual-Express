
import { useState } from "react";
import { addLigneCommande } from "../../api/ligneCommandeApi";
import { Box, Button, TextField } from "@mui/material";

export default function AjouterLigneCommande() {
    const [form, setForm] = useState({
        quantite: "",
        prix: "",
        commandeId: "",
        produitId: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addLigneCommande(form);
        window.location.href = "/ligne-commandes";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Ajouter une Ligne de Commande</h2>

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
                    Ajouter
                </Button>
            </form>
        </Box>
    );
}
