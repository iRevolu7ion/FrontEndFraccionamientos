import React from "react";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";

import{Box, Typography} from "@mui/material";

const HomePage= ()=>{
    return(
        <Box sx={{display:'flex'}}>
            <AppBar>
                <SideBar>
                    <Typography variant="h3" gutterBottom>
                        Bienvenido
                    </Typography>
                </SideBar>
            </AppBar>
        </Box>
    )
}
export default HomePage;