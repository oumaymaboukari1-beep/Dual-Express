
import { useEffect, useState } from "react";
import { getRestaurants, deleteRestaurant } from "../../../api/restaurantApi.js";
import DataTable from "../../components/DataTable";
import { Button } from "@mui/material";

export default function GererCommandes() {
    const [rows, setRows] = useState([]);

    const load = async () => {
        const res = await getRestaurants();
        setRows(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (id) => {
        await deleteRestaurant(id);
        load();
    };

    const columns = [
        { field: "id", headerName: "ID", width: 60 },
        { field: "nom", headerName: "Nom", width: 200 },
        { field: "adresse", headerName: "Adresse", width: 250 },
        { field: "categorie", headerName: "Catégorie", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            width: 200,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(params.row.id)}
                >
                    Supprimer
                </Button>
            ),
        },
    ];

    return (
        <div style={{ paddingLeft: 260, paddingTop: 100 }}>
            <h2>Restaurants</h2>
            <DataTable rows={rows} columns={columns} />
        </div>
    );
}
