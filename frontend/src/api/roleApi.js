import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";

<Route path="/utilisateurs" element={<ListeUtilisateurs />} />
<Route path="/utilisateurs/add" element={<AjouterUtilisateur />} />
<Route path="/utilisateurs/edit/:id" element={<ModifierUtilisateur />}