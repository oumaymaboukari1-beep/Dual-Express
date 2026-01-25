
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar position="fixed" sx={{ marginLeft: 240 }}>
            <Toolbar>
                <Typography variant="h6">Dual Express Dashboard</Typography>
            </Toolbar>
        </AppBar>
    );
}
