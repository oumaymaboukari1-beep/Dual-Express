
import { useEffect, useState } from "react";
import { getRoles, deleteRole } from "../../../api/roleApi.js";
import DataTable from "../../components/DataTable";
import { Button } from "@mui/material";

export default function MesCommandes() {
    const [rows, setRows] = useState([]);

    const load = async () => {
        try {
            const res = await getRoles();

            // IMPORTANT : DataGrid exige une propriété "id"
            const formatted = res.data.map((role) => ({
                id: role.id,
                nom: role.nom
            }));

            setRows(formatted);
        } catch (error) {
            console.error("Erreur lors du chargement des rôles :", error);
        }
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Supprimer ce rôle ?")) return;

        try {
            await deleteRole(id);
            load();
        } catch (e) {
            console.error("Erreur suppression rôle", e);
        }
    };

    const columns = [
        { field: "id", headerName: "ID", width: 120 },
        { field: "nom", headerName: "Nom du rôle", width: 300 },

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
                            (window.location.href = `/roles/edit/${params.row.id}`)
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
            <h2>Liste des Rôles</h2>

            <DataTable rows={rows} columns={columns} />

            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => (window.location.href = "/roles/add")}
            >
                Ajouter un rôle
            </Button>
        </div>
    );
}
