
import { useEffect, useState } from "react";
import { getCommande, updateCommande } from "../../api/commandeApi";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ModifierCommande() {
    const { id } = useParams();

    const [form, setForm] = useState({
        dateCommande: "",
        statut: "",
        montantTotal: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const res = await getCommande(id);
        setForm(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCommande(id, form);
        window.location.href = "/commandes";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Modifier Commande</h2>

            <form onSubmit={handleSubmit}>
                <TextField
                    name="dateCommande"
                    type="datetime-local"
                    value={form.dateCommande}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    label="Date commande"
                    InputLabelProps={{ shrink: true }}
                />

                <TextField
                    name="statut"
                    select
                    value={form.statut}
                    onChange={handleChange}
                    label="Statut"
                    fullWidth
                    margin="normal"
                >
                    <MenuItem value="EN_ATTENTE">En attente</MenuItem>
                    <MenuItem value="EN_PREPARATION">En préparation</MenuItem>
                    <MenuItem value="LIVREE">Livrée</MenuItem>
                    <MenuItem value="ANNULEE">Annulée</MenuItem>
                </TextField>

                <TextField
                    name="montantTotal"
                    type="number"
                    value={form.montantTotal}
                    onChange={handleChange}
                    label="Montant total"
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
