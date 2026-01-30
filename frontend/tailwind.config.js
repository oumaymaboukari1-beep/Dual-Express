/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
    theme: { extend: {} },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                dualexpress: {
                    "primary": "#2563eb",
                    "secondary": "#22c55e",
                    "accent": "#f59e0b",
                    "neutral": "#1f2937",
                    "base-100": "#0b1220",     // fond sombre élégant
                    "base-200": "#111827",
                    "base-300": "#1f2937",
                    "info": "#38bdf8",
                    "success": "#22c55e",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                }
            },
            "light"
        ]
    }
}