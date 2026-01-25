
import { useEffect, useState } from "react";
import { getProduit, updateProduit } from "../../api/produitApi";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ModifierProduit() {
    const { id } = useParams();
    const [form, setForm] = useState({
        nom: "",
        description: "",
        prix: "",
        categorie: "",
    });

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await getProduit(id);
        setForm(res.data);
    };

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduit(id, form);
        window.location.href = "/produits";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Modifier Produit</h2>

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
                    Modifier
                </Button>
            </form>
        </Box>
    );
}
