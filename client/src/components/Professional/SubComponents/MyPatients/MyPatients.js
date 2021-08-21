import {Box, Typography, makeStyles, Button } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPatients, removeMyPatient} from '../../actions'

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
    const reset = useSelector(store => store.reducerAddPatients.reset);
    const user = useSelector(store => store.reducerLog.user);
    console.log("el user en mis pacientes es ", user);
    const dispatch = useDispatch();
    const [select, setSelect] = useState([]);
    console.log(patients);

    useEffect(() => {
      if(user.tipo_usuario === "profesional") dispatch(getMyPatients(user.email))
    }, [reset])
    

    const columns = [
      { field: 'id', headerName: 'ID', width: 110 },
      { field: 'dni', headerName: 'Cedula', width: 120 },
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
        dni: patient.cedula,
        name: patient.nombre,
        lastName: patient.apellidos,
        phone: patient.telefono,
        birth: patient.fecha_de_nacimiento,
        address: patient.direccion,
        country: patient.pais,
        email: patient.usuarioEmail
      }
    });

    const handleDelete = (e) =>{
      e.preventDefault();
      console.log('eliminado')
      console.log(select)
      dispatch(removeMyPatient(select))
    }
    
    return(
        <Box className={classes.box}>

            <Typography variant='h4' color='blue'>Mis Patients</Typography>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid className={classes.grid}
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange={(items) => setSelect(items)}
              />
            </div>
            {select.length > 0 && 
              <Box className={classes.btnBox}>
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={handleDelete}
                >
                  ELIMINAR PACIENTES
                </Button>
              </Box>}
        </Box>
    )
}