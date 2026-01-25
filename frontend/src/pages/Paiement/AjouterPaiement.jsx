
import { useState } from "react";
import { addPaiement } from "../../api/paiementApi";
import { Box, Button, TextField, MenuItem } from "@mui/material";

export default function AjouterPaiement() {
    const [form, setForm] = useState({
        montant: "",
        datePaiement: "",
        statut: "",
        commandeId: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addPaiement(form);
        window.location.href = "/paiements";
    };

    return (
        <Box sx={{ paddingLeft: 260, paddingTop: 100, width: 400 }}>
            <h2>Ajouter un Paiement</h2>

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
                    label="Date paiement"
                    fullWidth
                    margin="normal"
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
                    Ajouter
                </Button>
            </form>
        </Box>
    );
}
