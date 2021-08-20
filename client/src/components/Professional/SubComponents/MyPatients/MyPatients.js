import {Box, Typography, makeStyles } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPatients } from '../../actions'

const useStyle = makeStyles((theme) => ({
    text: {
      color: "#159DE9",
    },
    box: {
      padding: "10px",
      paddingLeft: "50px",
      paddingRight: "50px",
      marginLeft: "10px",
      marginRight: "10px",
      marginBottom: "10px",
      display: "flex",
      flexDirection: "column",
      borderRadius: "10px",
      color: "#159DE9",
    },
    grid:{
      color:"black",
      
    }
}));
  
export default function MyPatients(){
    const classes = useStyle();
    const patients = useSelector(store => store.reducerAddPatients.MyPatientsList);
    const user = useSelector(store => store.reducerLog.user);
    console.log("el user en mis pacientes es ", user);
    const dispatch = useDispatch();
    console.log(patients);

    useEffect(() => {
      if(user.tipo_usuario === "profesional") dispatch(getMyPatients(user.email))
    }, [])

    const columns = [
      { field: 'id', headerName: 'ID', width: 110 },
      { field: 'dni', headerName: 'DNI', width: 110 },
      {
        field: 'name',
        headerName: 'Nombre',
        width: 150,
        editable: true,
      },
      {
        field: 'lastName',
        headerName: 'Apellido',
        width: 150,
        editable: true,
      },
      {
        field: 'phone',
        headerName: 'Telefono',
        width: 150,
        editable: true,
      },
      {
        field: 'birth',
        headerName: 'Fecha de nacimiento',
        type: 'date',
        width: 150,
        editable: true,
      },
      {
        field: 'address',
        headerName: 'Direccion',
        width: 150,
        editable: true,
      },
      {
        field: 'country',
        headerName: 'Pais',
        width: 150,
        editable: true,
      },
      {
        field: 'email',
        headerName: 'Correo electronico',
        width: 150,
        editable: true,
      },
    ];
    
    // const rows = [];
    const rows = patients && patients.map(patient => {
      return {
        id: patient.id,
        dni: patient.DNI,
        name: patient.nombre,
        lastName: patient.apellidos,
        phone: patient.telefono,
        birth: patient.fecha_de_nacimiento,
        address: patient.direccion,
        country: patient.pais,
        email: patient.usuarioEmail
      }
    });

    const handleChange = (items) =>{
        console.log("los items son",items);
    }
    
    return(
        <Box className={classes.box}>

            <Typography variant='h4' color='blue'>Patients</Typography>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid className={classes.grid}
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
              />
            </div>

        </Box>
    )
}