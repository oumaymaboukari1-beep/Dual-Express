import api from "../../../api/axios";
import StatusPill from "../../../components/StatusPill";

const ManageCommandes = () => {
    const [rows, setRows] = useState([]);

    const fetchData = async () => {
        // TODO: expose un GET /admin/commandes (ici, je simule avec /commandes?status=EN_COURS si tu ajoutes)
        // Pour MVP, charge des données de test depuis /restaurants + /produits
    };

    useEffect(() => { fetchData(); }, []);

    const accept = async (id) => {
        // await api.patch(`/resto/commandes/${id}/accept`);
        // await fetchData();
    };

    const cancel = async (id) => {
        // await api.patch(`/admin/commandes/${id}/cancel`);
        // await fetchData();
    };

    return (
        <div className="glass p-4 shadow-soft">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Commandes</h3>
                <input className="input input-bordered input-sm w-64" placeholder="Rechercher..." />
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                        <th>ID</th><th>Client</th><th>Restaurant</th><th>Montant</th><th>Statut</th><th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((r) => (
                        <tr key={r.id}>
                            <td>{r.id}</td>
                            <td>{r.utilisateurId}</td>
                            <td>{r.restaurantId}</td>
                            <td>{r.montantTotal} TND</td>
                            <td><StatusPill statut={r.statut} /></td>
                            <td className="space-x-2">
                                <button className="btn btn-xs btn-success" onClick={() => accept(r.id)}>Accepter</button>
                                <button className="btn btn-xs btn-error" onClick={() => cancel(r.id)}>Annuler</button>
                            </td>
                        </tr>
                    ))}
                    {rows.length === 0 && (
                        <tr><td colSpan="6" className="text-center opacity-60 py-10">Aucune commande</td></tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCommandes;