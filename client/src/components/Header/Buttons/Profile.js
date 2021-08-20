import {Button,Box, FormControl} from '@material-ui/core/'
import { makeStyles,TextField} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { blue, red} from '@material-ui/core/colors';
import { useFirebaseApp, useUser } from "reactfire";
const useStyle=makeStyles(theme=>({
    btn:{
        margin: theme.spacing(1),
        minWidth:'84px'   
    },
    head:{

        backgroundColor: blue[500],
        margin:"5px"
        
    },
    menu:{
        display:"flex",
        flexDirection:"column",
        flexWrap:"notWrap",
        position:"fixed",
        right:"200px",
        top:"85px",
        minWidth:"400px",
        maxWidth:"190px",
        padding:"10px",
        marginLeft:"20px",
        marginRight:"50px",
        backgroundColor:"#C4C4C4",
        borderRadius:"10px",
    },
    pick:{
        height:"90px",
        width:"90px",
        borderRadius:"50%"
    },
    text:{
        padding:"1px",
        fontSize:"1.5vh"
    },
    textfield: {
        width: "100%",
      },
    input: {
        height:"50px",
    padding:"2px",
    color: "#159DE9",
    width: "100%",
  },
  form:{
      height:"50px"
  }
}))


export default function Profile({onClick}){
    let history=useHistory();
    const classes=useStyle();
    const user=useUser() 
    
    
    return(
        <Box className={classes.menu}>
                <FormControl className={classes.form}>
                    <TextField
                        className={classes.textfield}
                        type="name"
                        label="Nombre"
                        variant="outlined"
                        color="secondary"
                        name="name"
                        InputProps={{
                        className:classes.input,
                        }}
                        autoComplete="off"
                        />
                </FormControl>
                <FormControl className={classes.form}>
                    <TextField
                        className={classes.textfield}
                        type="lastname"
                        label="Apellido"
                        variant="outlined"
                        color="secondary"
                        name="lastname"
                        InputProps={{
                        className: classes.input,
                        }}
                        autoComplete="off"
                        />
                </FormControl>
                <FormControl className={classes.form}>
                    <TextField
                        className={classes.textfield}
                        type="email"
                        label="Correo electronico"
                        variant="outlined"
                        color="secondary"
                        name="email"
                        InputProps={{
                        className: classes.input,
                        }}
                        autoComplete="off"
                        />
                </FormControl>
                <FormControl className={classes.form}>
                    <TextField
                        className={classes.textfield}
                        type="Telefono"
                        label="Telefono"
                        variant="outlined"
                        color="secondary"
                        name="Telefono"
                        InputProps={{
                        className: classes.input,
                        }}
                        autoComplete="off"
                        />
                </FormControl>
                <FormControl className={classes.form}>
                    <TextField
                        className={classes.textfield}
                        id="birth"
                        type="date"
                        variant="outlined"
                        color="secondary"
                        name="Telefono"
                        InputProps={{
                        className: classes.input,
                        }}
                        autoComplete="off"
                        />
                </FormControl>
                <FormControl className={classes.form}>
                    <TextField
                        className={classes.textfield}
                        label="Dirección"
                        id="address"
                        variant="outlined"
                        color="secondary"
                        name="Dirección"
                        InputProps={{
                        className: classes.input,
                        }}
                        autoComplete="off"
                        />
                </FormControl>
                <Button className={classes.head}>
                    Aceptar
                </Button>
        </Box>
    )
}