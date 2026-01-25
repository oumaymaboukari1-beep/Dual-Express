
import { useEffect, useState } from "react";
import {
    getLignesCommande,
    deleteLigneCommande,
} from "../../api/ligneCommandeApi";
import DataTable from "../../components/DataTable";
import { Button } from "@mui/material";

export default function ListeLignesCommande() {
    const [rows, setRows] = useState([]);

    const load = async () => {
        try {
            const res = await getLignesCommande();

            // Mapping pour respecter DataGrid : ID obligatoire
            const formatted = res.data.map((ligne) => ({
                id: ligne.id,
                quantite: ligne.quantite,
                prix: ligne.prix,
                commandeId: ligne.commande?.id ?? ligne.commandeId,
                produitId: ligne.produit?.id ?? ligne.produitId,
            }));

            setRows(formatted);
        } catch (error) {
            console.error("Erreur lors du chargement des lignes de commande :", error);
        }
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Voulez-vous supprimer cette ligne ?")) return;

        try {
            await deleteLigneCommande(id);
            load();
        } catch (e) {
            console.error("Erreur suppression ligne de commande :", e);
        }
    };

    const columns = [
        { field: "id", headerName: "ID", width: 80 },
        { field: "quantite", headerName: "Quantité", width: 130 },
        { field: "prix", headerName: "Prix (DT)", width: 130 },
        { field: "commandeId", headerName: "Commande ID", width: 150 },
        { field: "produitId", headerName: "Produit ID", width: 150 },

        {
            field: "actions",
            headerName: "Actions",
            width: 250,
            renderCell: (params) => (
                <>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={() =>
                            (window.location.href = `/ligne-commandes/edit/${params.row.id}`)
                        }
                    >
                        Modifier
                    </Button>

                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        Supprimer
                    </Button>
                </>
            ),
        },
    ];

    return (
        <div style={{ paddingLeft: 260, paddingTop: 100 }}>
            <h2>Lignes de Commande</h2>

            <DataTable rows={rows} columns={columns} />

            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => (window.location.href = "/ligne-commandes/add")}
            >
                Ajouter une ligne
            </Button>
        </div>
    );
}
