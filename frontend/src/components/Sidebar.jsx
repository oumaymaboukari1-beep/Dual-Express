
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PeopleIcon from "@mui/icons-material/People";
import PaymentsIcon from "@mui/icons-material/Payments";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <Drawer variant="permanent" anchor="left">
            <List sx={{ width: 240 }}>
                <ListItemButton component={Link} to="/dashboard">
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                <ListItemButton component={Link} to="/produits">
                    <ListItemIcon><FastfoodIcon /></ListItemIcon>
                    <ListItemText primary="Produits" />
                </ListItemButton>

                <ListItemButton component={Link} to="/restaurants">
                    <ListItemIcon><StoreIcon /></ListItemIcon>
                    <ListItemText primary="Restaurants" />
                </ListItemButton>

                <ListItemButton component={Link} to="/commandes">
                    <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                    <ListItemText primary="Commandes" />
                </ListItemButton>

                <ListItemButton component={Link} to="/paiements">
                    <ListItemIcon><PaymentsIcon /></ListItemIcon>
                    <ListItemText primary="Paiements" />
                </ListItemButton>

                <ListItemButton component={Link} to="/utilisateurs">
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    <ListItemText primary="Utilisateurs" />
                </ListItemButton>
            </List>
        </Drawer>
    );
}
