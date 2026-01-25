
import { useEffect, useState } from "react";
import { getPaiement, updatePaiement } from "../../api/paiementApi";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ModifierPaiement() {
    const { id } = useParams();

    const [form, setForm] = useState({
        montant: "",
        datePaiement: "",
        statut: "",
        commandeId: "",
    });

    const load = async () => {
        const res = await getPaiement(id);
        setForm(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePaiement(id, form);
        window.location.href = "/paiements";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Modifier Paiement</h2>

            <form onSubmit={handleSubmit}>
                <TextField
                    name="montant"
                    type="number"
                    label="Montant"
                    fullWidth
                    margin="normal"
                    value={form.montant}
                    onChange={handleChange}
                />

                <TextField
                    name="datePaiement"
                    type="datetime-local"
                    fullWidth
                    margin="normal"
                    label="Date paiement"
                    InputLabelProps={{ shrink: true }}
                    value={form.datePaiement}
                    onChange={handleChange}
                />

                <TextField
                    name="statut"
                    select
                    label="Statut"
                    fullWidth
                    margin="normal"
                    value={form.statut}
                    onChange={handleChange}
                >
                    <MenuItem value="EN_ATTENTE">En attente</MenuItem>
                    <MenuItem value="PAYE">Payé</MenuItem>
                    <MenuItem value="REFUSE">Refusé</MenuItem>
                </TextField>

                <TextField
                    name="commandeId"
                    type="number"
                    label="Commande ID"
                    fullWidth
                    margin="normal"
                    value={form.commandeId}
                    onChange={handleChange}
                />

                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                    Modifier
                </Button>
            </form>
        </Box>
    );
}
