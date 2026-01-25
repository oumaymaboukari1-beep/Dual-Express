
import { useState } from "react";
import { addRole } from "../../api/roleApi";
import { Box, Button, TextField } from "@mui/material";

export default function AjouterRole() {
    const [form, setForm] = useState({
        nom: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, nom: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addRole(form);
        window.location.href = "/roles";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Ajouter un Rôle</h2>

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Nom du rôle"
                    name="nom"
                    fullWidth
                    margin="normal"
                    value={form.nom}
                    onChange={handleChange}
                />

                <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                    Ajouter
                </Button>
            </form>
        </Box>
    );
}
