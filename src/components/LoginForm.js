import React,{useState} from "react";
import axios from "axios";
import {TextField, Button, Box, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";


const LoginForm =()=> {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async()=>{
        try{
            const response = await axios.post("http://localhost:3001/api/users/authenticate",{username,password});
            navigate('/homepage')
            alert("Login Exitoso");
        }catch(err){
            console.log(err);
            alert("Error al iniciar sesion");
        }
    };

    return(
        <Box component="form" sx={{mt:1}}>
        <TextField margin="normal"
                   required 
                   fullWidth 
                   id="username" 
                   label="nombre de usuario" 
                   name="username"
                   autocomplete="username" 
                   autoFocus value={username} 
                   onChange={(e)=>setUsername(e.target.value)}
                   />
        <TextField margin="normal"
                   required 
                   fullWidth 
                   type="password"
                   id="password" 
                   label="Password" 
                   name="password"
                   autocomplete="password" 
                   autoFocus value={password} 
                   onChange={(e)=>setPassword(e.target.value)}/>           
            <Button
                    fullWidth
                    variant="contained"
                    sx={{mt:3,mb:2}}
                    onClick={handleLogin}>
                        Login
            </Button>
        
            <Typography variant="body2" align="center">
                No tienes cuenta? Registrate: <a href="/register">aqui</a>
            </Typography>
        </Box>
    );
};
export default LoginForm;