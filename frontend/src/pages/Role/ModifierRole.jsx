
import { useEffect, useState } from "react";
import { getRole, updateRole } from "../../api/roleApi";
import { Box, Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ModifierRole() {
    const { id } = useParams();

    const [form, setForm] = useState({
        nom: "",
    });

    const load = async () => {
        const res = await getRole(id);
        setForm(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleChange = (e) =>
        setForm({ ...form, nom: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateRole(id, form);
        window.location.href = "/roles";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Modifier Rôle</h2>

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
                    Modifier
                </Button>
            </form>
        </Box>
    );
}
