import StatCard from "../../../components/StatCard";

const RestaurantHome = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard title="Commandes du jour" value="18" icon="today" color="primary" />
                <StatCard title="Temps moyen (min)" value="27" icon="timer" color="secondary" />
                <StatCard title="Taux d'acceptation" value="96%" icon="thumb_up" color="accent" />
            </div>
            <div className="glass p-4 shadow-soft">
                <div className="text-sm opacity-70 mb-3">Dernières commandes</div>
                <ul className="space-y-2">
                    {[1012, 1013, 1014].map(id => (
                        <li key={id} className="flex justify-between items-center p-3 rounded bg-base-300/40">
                            <span>CMD-{id}</span>
                            <span className="badge badge-info">En cours</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default RestaurantHome;