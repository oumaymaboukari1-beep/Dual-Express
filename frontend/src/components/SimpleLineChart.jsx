import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function SimpleLineChart({ data }) {
    return (
        <div className="glass p-4 shadow-soft">
            <div className="text-sm opacity-70 mb-2">Commandes / jour</div>
            <ResponsiveContainer width="100%" height={260}>
                <LineChart data={data}>
                    <XAxis dataKey="day" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}