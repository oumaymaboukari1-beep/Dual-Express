
import { useEffect, useState } from "react";
import { getRestaurant, updateRestaurant } from "../../api/restaurantApi";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ModifierRestaurant() {
    const { id } = useParams();
    const [form, setForm] = useState({
        nom: "",
        adresse: "",
        categorie: "",
    });

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await getRestaurant(id);
        setForm(res.data);
    };

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateRestaurant(id, form);
        window.location.href = "/restaurants";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Modifier Restaurant</h2>

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Nom"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    margin="normal"
                />

                <TextField
                    fullWidth
                    label="Adresse"
                    name="adresse"
                    value={form.adresse}
                    onChange={handleChange}
                    margin="normal"
                />

                <TextField
                    fullWidth
                    select
                    label="Catégorie"
                    name="categorie"
                    value={form.categorie}
                    onChange={handleChange}
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
