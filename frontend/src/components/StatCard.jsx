import React from "react";

const StatCard = ({ title, value, subtitle, icon, color = "primary" }) => {
    return (
        <div className={`glass p-5 shadow-soft border-l-4 border-${color}`}>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-sm opacity-70">{title}</div>
                    <div className="text-3xl font-semibold mt-1">{value}</div>
                    {subtitle && (
                        <div className="text-xs opacity-60 mt-1">{subtitle}</div>
                    )}
                </div>

                <div className={`btn btn-circle btn-${color} text-white`}>
                    <span className="material-icons">{icon}</span>
                </div>
            </div>
        </div>
    );
};

export default StatCard;