import StatCard from "../../../components/StatCard";
import SimpleLineChart from "../../../components/SimpleLineChart";
import api from "../../../api/axios";

const AdminHome = () => {
    const [stats, setStats] = useState({ commandes: 0, restaurants: 0, users: 0, livraisons: 0 });
    const [chart, setChart] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                // TODO: expose des endpoints admin si tu veux des stats réelles.
                const { data: restos } = await api.get('/restaurants');
                const { data: produits } = await api.get('/produits');
                setStats(s => ({ ...s, restaurants: restos.length, livraisons: 0, users: 0, commandes: produits.length }));
                setChart([
                    { day:'Lun', count:4 }, { day:'Mar', count:7 },
                    { day:'Mer', count:5 }, { day:'Jeu', count:9 },
                    { day:'Ven', count:6 }, { day:'Sam', count:12 }, { day:'Dim', count:8 },
                ]);
            } catch (e) {}
        })();
    }, []);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard title="Commandes" value={stats.commandes} icon="shopping_cart" color="primary" />
                <StatCard title="Restaurants" value={stats.restaurants} icon="restaurant" color="secondary" />
                <StatCard title="Utilisateurs" value={stats.users} icon="group" color="accent" />
                <StatCard title="Livraisons" value={stats.livraisons} icon="local_shipping" color="warning" />
            </div>
            <SimpleLineChart data={chart} />
        </div>
    );
};

export default AdminHome;