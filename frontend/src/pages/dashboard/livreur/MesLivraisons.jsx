
import { useEffect, useState } from "react";
import { getUtilisateur, updateUtilisateur } from "../../../api/utilisateurApi.js";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";

export default function MesLivraisons() {
    const { id } = useParams();

    const [form, setForm] = useState({
        nom: "",
        email: "",
        motDePasse: "",
        role: "",
        telephone: "",
    });

    const load = async () => {
        const res = await getUtilisateur(id);
        setForm(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUtilisateur(id, form);
        window.location.href = "/utilisateurs";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 450 }}>
            <h2>Modifier Utilisateur</h2>

            <form onSubmit={handleSubmit}>
                <TextField
                    name="nom"
                    label="Nom"
                    fullWidth
                    margin="normal"
                    value={form.nom}
                    onChange={handleChange}
                />

                <TextField
                    name="email"
                    type="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={form.email}
                    onChange={handleChange}
                />

                <TextField
                    name="motDePasse"
                    type="password"
                    label="Mot de passe"
                    fullWidth
                    margin="normal"
                    value={form.motDePasse}
                    onChange={handleChange}
                />

                <TextField
                    name="role"
                    select
                    label="Rôle"
                    fullWidth
                    margin="normal"
                    value={form.role}
                    onChange={handleChange}
                >
                    <MenuItem value="ADMIN">Admin</MenuItem>
                    <MenuItem value="CLIENT">Client</MenuItem>
                    <MenuItem value="LIVREUR">Livreur</MenuItem>
                </TextField>

                <TextField
                    name="telephone"
                    label="Téléphone"
                    fullWidth
                    margin="normal"
                    value={form.telephone}
                    onChange={handleChange}
                />

                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Modifier
                </Button>
            </form>
        </Box>
    );
}
