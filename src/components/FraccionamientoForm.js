import React, {useState} from "react";
import axios from 'axios';
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FraccionamientoForm= () =>{
    const [nombreFracc, setNombreFracc] = useState("");
  const [direccion, setDireccion] = useState("");
  const [NumeroCasas, setNumeroCasas] = useState("");
  const [tipoFraccionamiento, setTipoFraccionamiento] = useState("");
  const [zonasInteres, setZonasInteres] = useState("");
  const [casasHabitadas, setCasasHabitadas] = useState("");

  const navigate= useNavigate();//Hooh para navegar entre rutas

    const handleFraccionamiento = async () =>{
        try{
            const response = await axios.post('http://localhost:3001/api/fracc',{nombreFracc,direccion, NumeroCasas,tipoFraccionamiento,zonasInteres,casasHabitadas});
            alert("Fraccionamiento registrado con exito");
           navigate('/home');
        }catch(err){
            console.log(err);
            alert(`Error al registrar Fraccionamiento ${nombreFracc}`);
        }
    }
    return(
        <Box component='form' sx={{mt:1}}>
            <TextField margin="normal"
                   required 
                   fullWidth 
                   id="nombreFracc" 
                   label="nombre de fraccionamiento" 
                   name="nombreFracc"
                   autocomplete="nombreFracc" 
                   autoFocus value={nombreFracc} 
                   onChange={(e)=>setNombreFracc(e.target.value)}
                   />
        <TextField margin="normal"
                   required 
                   fullWidth 
                   id="Direccion" 
                   label="direccion" 
                   name="direccion"
                   autocomplete="p" 
                   autoFocus value={direccion} 
                   onChange={(e)=>setDireccion(e.target.value)}
                   />
                   <TextField margin="normal"
                   required 
                   fullWidth 
                   id="NumeroCasas" 
                   label="NumeroCasas" 
                   name="NumeroCasas"
                   autocomplete="NumeroCasas" 
                   autoFocus value={NumeroCasas} 
                   onChange={(e)=>setNumeroCasas(e.target.value)}
                   />
                   <TextField margin="normal"
                   required 
                   fullWidth 
                   id="tipoFraccionamiento" 
                   label="Tipo de fraccionamiento" 
                   name="TipoFraccionamiento"
                   autocomplete="tipoFraccionamiento" 
                   autoFocus value={tipoFraccionamiento} 
                   onChange={(e)=>setTipoFraccionamiento(e.target.value)}
                   />
                   <TextField margin="normal"
                   required 
                   fullWidth 
                   id="zonasInteres" 
                   label="Zonas de interes" 
                   name="zonasInteres"
                   autocomplete="zonasInteres" 
                   autoFocus value={zonasInteres} 
                   onChange={(e)=>setZonasInteres(e.target.value)}
                   />
                   <TextField margin="normal"
                   required 
                   fullWidth 
                   id="casasHabitadas" 
                   label="Cantidad de casas habitadas" 
                   name="casasHabitadas"
                   autocomplete="casasHabitadas" 
                   autoFocus value={casasHabitadas} 
                   onChange={(e)=>setCasasHabitadas(e.target.value)}
                   />
                   <Button
                        fullWidth
                        variant='contained'
                        sx={{mt:3,mb:2}}
                        onClick={handleFraccionamiento}
                   > 
                    Crear nuevo Fraccionamiento 
                    </Button>    
        </Box>
    )
}
export default FraccionamientoForm;