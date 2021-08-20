import { Box, Typography, makeStyles} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector } from "react-redux";
import SearchBar from "../../SearchBar";
import { searchprofesional } from '../../actions';


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


export default function Professionals(){
    const classes = useStyle();
    const professionals = useSelector(store => store.reducerSearchProfesional.profesionales);

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
    const rows = professionals && professionals.map(professional => {
        return {
            id: professional.id,
            dni: professional.cedula,
            name: professional.nombre,
            lastName: professional.apellidos,
            phone: professional.telefono,
            birth: professional.fecha_de_nacimiento,
            address: professional.direccion,
            country: professional.pais,
            email: professional.usuarioEmail
        }
    });
    
    return(
        <Box className={classes.box}>

            <Typography variant='h4' color='blue'>Profesionales</Typography>
            <SearchBar getAction={searchprofesional}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid className={classes.grid}
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
                />
            </div>
        </Box>
    )
}