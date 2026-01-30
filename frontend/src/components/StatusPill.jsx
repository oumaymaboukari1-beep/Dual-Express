const map = {
    EN_COURS:  { class: 'badge-info',    label: 'En cours' },
    VALIDEE:   { class: 'badge-success', label: 'Validée' },
    LIVREE:    { class: 'badge-success', label: 'Livrée' },
    ANNULEE:   { class: 'badge-error',   label: 'Annulée' },
    EN_ATTENTE:{ class: 'badge-warning', label: 'En attente' }
};

export default function StatusPill({ statut }) {
    const s = map[statut] || { class: 'badge-ghost', label: statut };
    return <span className={`badge ${s.class} badge-sm`}>{s.label}</span>;
}