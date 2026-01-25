
import { Box, Paper, Typography } from "@mui/material";

export default function Dashboard() {
    return (
        <Box sx={{ marginLeft: 30, paddingTop: 10 }}>
            <Typography variant="h4">Dashboard</Typography>

            <Paper sx={{ padding: 2, marginTop: 3 }}>
                <Typography>Bienvenue dans l’espace administrateur de Dual Express !</Typography>
            </Paper>
        </Box>
    );
}
