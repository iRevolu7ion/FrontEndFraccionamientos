import React from "react";
import LoginForm from "../components/LoginForm";
import { Box } from "@mui/material";

const LoginPage= () => {
    return(
        <Box sx={{display:'flex'}}>
           
            <Box component="main" sx={{flexGrow:1, p:3}}>
            <h1>Iniciar sesion</h1>
                <LoginForm/>
            </Box>
          
        </Box>
    );
};
export default LoginPage;







