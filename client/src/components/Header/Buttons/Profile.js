import {Button,Box, FormControl,MenuItem,InputLabel,Select} from '@material-ui/core/'
import { makeStyles,TextField,Typography} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { blue, red} from '@material-ui/core/colors';
import { useFirebaseApp, useUser } from "reactfire";
import { getCountries } from '../../Sign/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import validate from '../../Sign/functions/validate';
import { updateProfile } from './redux/actionUpdate';

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
        backgroundColor:"rgb(232, 240, 254) ",
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
    },
    formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    },
    selectEmpty:{
    width: "230px",
    main: "#2196f3 !important",
    },
    labelTextField:{
    color: "#2196f3 !important",
},
    menuItem:{
    position:"fixed",
    left:"-500px"
}
}))


export default function Profile({onClick}){
    let history=useHistory();
    const classes=useStyle();
    const user=useUser();
    const countries = useSelector((state)=> state.reducerSign.countries);
    const profile = useSelector((state) => state.reducerLog.info);
    const [onfocusname,setOnFocusName]=useState(false);
    const [onfocuslastname,setOnFocusLastName]=useState(false);
    const [onfocusphone,setOnFocusPhone]=useState(false);
    const [onfocusbirth,setOnFocusBirth]=useState(false);
    const [onfocusaddres,setOnFocusAdress]=useState(false);

    const [load, setLoad] = useState("");
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    

    const [patient, setPatient] = useState({
        dni: '',
        name: '',
        lastName: '',
        email: user.data.email,
        phone: '',
        birth: '',
        address:'',
        country: '',
        id:'',
    });
    
    
    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])
    



    const onHandleChange = (e) => {
        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...patient,
            [e.target.name]: e.target.value
          }));
    }

    const onHandleSubmit = async (e) => {
        
        
        dispatch(updateProfile({...patient,email:profile.usuarioEmail,id:profile.id}));
        setPatient({
                dni: '',
                name: '',
                lastName: '',
                email:'',
                phone: '',
                birth: '',
                address:'',
                country: '',
                id:'',
            })
        setLoad("cargando");
        
       
    }
    
    return(
        <form onSubmit={onHandleSubmit}>
            
        <Box className={classes.menu}>
            <Typography className={classes.labelTextField}>
                     Datos personales
            </Typography>
                <FormControl className={classes.form}>
                    <TextField
                        className={classes.textfield}
                        value={patient.name}
                        onChange={(event)=>onHandleChange(event)}
                        label={!onfocusname?profile.nombre:"Nombre"}
                        onFocus={()=>setOnFocusName(!onfocusname)}
                        onBlur={()=>setOnFocusName(!onfocusname)}
                        type="name"
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
                        value={patient.lastName}
                        onChange={(event)=>onHandleChange(event)}
                        label={!onfocuslastname?profile.apellidos:"Nombre"}
                        onFocus={()=>setOnFocusLastName(!onfocuslastname)}
                        onBlur={()=>setOnFocusLastName(!onfocuslastname)}

                        variant="outlined"
                        color="secondary"
                        name="lastName"
                        id="lastName"
                        InputProps={{
                        className: classes.input,
                        }}
                        autoComplete="off"
                        />
                </FormControl>
                {/* <FormControl className={classes.form}>
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
                </FormControl> */}
                <FormControl className={classes.form}>
                    <TextField
                        className={classes.textfield}
                        value={patient.phone}
                        onChange={(event)=>onHandleChange(event)}
                        label={!onfocusphone?profile.telefono:"Telefono"}
                        onFocus={()=>setOnFocusPhone(!onfocusphone)}
                        onBlur={()=>setOnFocusPhone(!onfocusphone)}
                        type="tel"
                        variant="outlined"
                        color="secondary"
                        name="phone"
                        InputProps={{
                        className: classes.input,
                        }}
                        autoComplete="off"
                        />
                </FormControl>
                <FormControl className={classes.form}>
                    <TextField
                        className={classes.textfield}
                        value={patient.birth}
                        onChange={(event)=>onHandleChange(event)}
                        //label={!onfocusbirth?profile.fecha_de_nacimiento.substring(0,profile.fecha_de_nacimiento.length-14):""}
                        // onBlur={()=>setOnFocusBirth(!onfocusbirth)}
                        onFocus={()=>setOnFocusBirth(false)}
                        onBlur={()=>setOnFocusBirth(true)}
                        id="birth"
                        type="date"
                        variant="outlined"
                        color="secondary"
                        name="birth"
                        placeholder="sadasdsad"
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
                <FormControl variant="outlined" className={classes.formControl}>
                     <InputLabel  id="demo-simple-select-outlined-label">Selecciona tu pais</InputLabel>
                        <Select className={classes.menuItem}
                            label="Selecciona tu pais"
                            labelId="countries"
                            id="country"
                            className={classes.selectEmpty}
                            inputProps={{ className: classes.labelTextField}}
                            name="country"
                            
                            >
                                {countries && countries.map( (country,i) => {
                                    return (
                                        <MenuItem key={i} value={country.name} >
                                            <em>{country.name}</em>
                                        </MenuItem>
                                        )
                                    })}                           
                        </Select>
                </FormControl>
                <Button type="submit" className={classes.head}>
                    Aceptar
                </Button>
        </Box>
        </form>
    )
}