import {Box, Typography, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { DataGrid } from '@material-ui/data-grid';

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
  }));

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Nombre',
      headerName: 'Nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'Apellido',
      headerName: 'Apellido',
      width: 150,
      editable: true,
    },
    {
      field: 'Telefono',
      headerName: 'Telefono',
      width: 150,
      editable: true,
    },
    {
      field: 'Fecha de nacimiento',
      headerName: 'Fecha de nacimiento',
      type: 'date',
      width: 150,
      editable: true,
    },
    {
      field: 'Direccion',
      headerName: 'Direccion',
      width: 150,
      editable: true,
    },
    {
      field: 'Pais',
      headerName: 'Pais',
      width: 150,
      editable: true,
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 150,
      editable: true,
    }
  ];
  

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

export default function Patients(){
    const classes = useStyle();

    return(
        <Box className={classes.box}>
            <Typography variant='h4' color='blue'>Patients</Typography>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                color='blue'
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
        </Box>
    )
}