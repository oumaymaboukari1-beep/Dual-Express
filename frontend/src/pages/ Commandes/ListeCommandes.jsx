
import { useEffect, useState } from "react";
import { getCommandes, deleteCommande } from "../../api/commandeApi";
import DataTable from "../../components/DataTable";
import { Button } from "@mui/material";

export default function ListeCommandes() {
    const [rows, setRows] = useState([]);

    const load = async () => {
        const res = await getCommandes();
        setRows(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (id) => {
        await deleteCommande(id);
        load();
    };

    const columns = [
        { field: "id", headerName: "ID", width: 80 },
        { field: "dateCommande", headerName: "Date", width: 180 },
        { field: "statut", headerName: "Statut", width: 150 },
        { field: "montantTotal", headerName: "Total (DT)", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            width: 230,
            renderCell: (params) => (
                <>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={() =>
                            (window.location.href = `/commandes/edit/${params.row.id}`)
                        }
                    >
                        Modifier
                    </Button>

                    <Button
                        variant="contained"
                        size="small"
                        color="error"
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
            <h2>Commandes</h2>
            <DataTable rows={rows} columns={columns} />
            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => (window.location.href = "/commandes/add")}
            >
                Ajouter une commande
            </Button>
        </div>
    );
}
