
import { useEffect, useState } from "react";
import { getProduits, deleteProduit } from "../../api/produitApi";
import DataTable from "../../components/DataTable";
import { Button } from "@mui/material";

export default function ListeProduits() {
    const [rows, setRows] = useState([]);

    const load = async () => {
        const res = await getProduits();
        setRows(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduit(id);
        load();
    };

    const columns = [
        { field: "id", headerName: "ID", width: 80 },
        { field: "nom", headerName: "Nom", width: 200 },
        { field: "description", headerName: "Description", width: 250 },
        { field: "prix", headerName: "Prix (DT)", width: 150 },
        { field: "categorie", headerName: "Catégorie", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            width: 220,
            renderCell: (params) => (
                <>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1 }}
                        onClick={() => (window.location.href = `/produits/edit/${params.row.id}`)}
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
            <h2>Produits</h2>
            <DataTable rows={rows} columns={columns} />
            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => (window.location.href = "/produits/add")}
            >
                Ajouter un produit
            </Button>
        </div>
    );
}
