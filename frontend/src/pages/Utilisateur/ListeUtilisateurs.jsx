
import { useEffect, useState } from "react";
import { getUtilisateurs, deleteUtilisateur } from "../../api/utilisateurApi";
import DataTable from "../../components/DataTable";
import { Button } from "@mui/material";

export default function ListeUtilisateurs() {
    const [rows, setRows] = useState([]);

    const load = async () => {
        const res = await getUtilisateurs();
        setRows(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (id) => {
        await deleteUtilisateur(id);
        load();
    };

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "nom", headerName: "Nom", width: 180 },
        { field: "email", headerName: "Email", width: 220 },
        { field: "role", headerName: "Rôle", width: 150 },
        { field: "telephone", headerName: "Téléphone", width: 180 },
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
                            (window.location.href = `/utilisateurs/edit/${params.row.id}`)
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
            <h2>Utilisateurs</h2>
            <DataTable rows={rows} columns={columns} />

            <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => (window.location.href = "/utilisateurs/add")}
            >
                Ajouter un utilisateur
            </Button>
        </div>
    );
}
