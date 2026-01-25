
import { useState } from "react";
import { addProduit } from "../../api/produitApi";
import { Box, Button, TextField, MenuItem } from "@mui/material";

export default function AjouterProduit() {
    const [form, setForm] = useState({
        nom: "",
        description: "",
        prix: "",
        categorie: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduit(form);
        window.location.href = "/produits";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Ajouter un Produit</h2>

            <form onSubmit={handleSubmit}>
                <TextField
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    label="Nom"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    label="Description"
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
                    name="categorie"
                    label="Catégorie"
                    select
                    value={form.categorie}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                >
                    <MenuItem value="FAST_FOOD">Fast Food</MenuItem>
                    <MenuItem value="TRADITIONNEL">Traditionnel</MenuItem>
                    <MenuItem value="SUSHI">Sushi</MenuItem>
                </TextField>

                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Ajouter
                </Button>
            </form>
        </Box>
    );
}
