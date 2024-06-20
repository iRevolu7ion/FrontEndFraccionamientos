import React from "react";
import FraccionamientoForm from "../components/FraccionamientoForm";
import { Box } from "@mui/material";


const FraccionamientoPage = ()=>{
    return(
    <Box sx={{display:'flex'}}>
            <Box component="main" sx={{flexGrow:1, p:3}}>
                <h1>Registro de Fraccionamiento</h1>
                <FraccionamientoForm/>
            </Box>
          
        </Box>
    ); 
};
export default FraccionamientoPage;
