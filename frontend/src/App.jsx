
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <AppRoutes />
        </>
    );
}
