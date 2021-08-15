import React, {useEffect, useState} from 'react'; 
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import 'firebase/auth';
import '../../firebase';
import { useFirebaseApp} from 'reactfire';
import { postSignIn, getCountries } from './actions';
import clsx from 'clsx';
import { FormControl, InputLabel, makeStyles, Grid, Container, TextField, Select, MenuItem, Button, CircularProgress, Slider,Box, Typography} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { blue} from '@material-ui/core/colors';
import validate from '../../functions/validate'

const useStyles = makeStyles((theme)=>({
    "& .MuiInputBase-root": {
        color: "#2196f3 !important"
    },
    divStyle:{
        paddingTop: '5%',
        backgroundColor: '#E8EEF4',
        width: "50%",
        marginLeft: "25%",
        marginTop: "85px",
        marginBottom: "5%",
        paddingBottom: '5%',
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    firstGrid:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    margin: {
        margin: theme.spacing(2),
    },
    textField: {
        width: '80%',
        main: blue[500],
    },
    labelTextField:{
        color: "#2196f3 !important",
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
    selectEmpty:{
        width: "191px",
        marginRight: "5px",
        main: "#2196f3 !important",
    },
    alert:{
        display:"flex",
        direction:"row",
        justifyContent:"center",
        textAlign:"center"
    },
    slider:{
        color: "#2196f3",
        width:"90%",
    },
    boxSlider:{
        width:"40%",
        display:'flex',
        flexDirection:'column',
        alignItems: "center",
        minWidth: "200px",
    },
    boxSliderText:{
        width:"100%",
        display:'flex',
        justifyContent: "space-between",
        '@media (max-width : 500px)':{
            width:"50%",
        }
    },
    fontNormal:{
        fontSize:"15px",
        '@media (max-width : 500px)':{
            fontSize:"10px",
        }
    },
    fontSelect:{
        fontSize:"15px",
        color:"#2196f3",
        '@media (max-width : 500px)':{
            fontSize:"10px",
        }
    }
}));


export default function GoogleSign(){
    let history=useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const firebase = useFirebaseApp();
    const [email, setEmail] = useState('');
    const [load, setLoad] = useState("");
    const [pass, setPass] = useState('');
    const [passconfirmation,setPassConfirmation]=useState('');
    const [errors, setErrors] = useState({});
    const [patient, setPatient] = useState({
        dni: '',
        name: '',
        lastName: '',
        email: '',
        phone: '',
        birth: '',
        address:'',
        country: '',
        type:'profesional'
    });


    const marks = [
        {
          value: 0,
          label: '',
        },
        {
          value: 100,
          label: '',
        },
      ];

    const countries = useSelector((state)=> state.reducerSign.countries);
    const postSingIn = useSelector((state)=> state.reducerSign.postSingIn);

    const onHandleChange = (e) => {
        if(e.target.name === 'email'){
            setEmail(e.target.value)//no carga el estado en email si no esta definida
        }
        if(e.target.name === 'password'){
            setPass(e.target.value)//no carga el estado en passowrd si no esta definida
        }
        if(e.target.name === 'passwordconfirmation'){
            setPassConfirmation(e.target.value)
        }
        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...patient,pass,passconfirmation,
            [e.target.name]: e.target.value
          }));
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        if(
            patient.name&&
            patient.dni&&
            patient.lastName&&
            patient.email&&
            patient.phone&&
            patient.birth&&
            patient.address&&
            patient.country
            ){
            setLoad("cargando");
            await firebase.auth().createUserWithEmailAndPassword(email, pass);
            dispatch(postSignIn(patient));
            setPatient({
                dni: '',
                name: '',
                lastName: '',
                email:'',
                phone: '',
                birth: '',
                address:'',
                country: ''
            })
            setEmail('');
            setPass('');
            setPassConfirmation('');
            setLoad("cargado");
            history.push('/login');
        }else{
            setLoad("Faltan campos")
        }
    }
    const alertFunction =() => {
        if(
            load==="cargando"
            ){
                return (
                   <Box width="100%" justifyContent="center">
                       <Alert className={classes.alert} severity="success">      
                             Campos completos
                       </Alert>
                   </Box>
                )}
                else{
                    return(
                       <Box width="100%" height="50px" justifyContent="center">
                           <Alert className={classes.alert} severity="info">      
                                Complete todos los campos
                            </Alert>
                       </Box>
                    )
                }
        }
    
    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])

    return (
        <>
            <Container className={classes.divStyle}>
            {alertFunction()}
            <form onSubmit={onHandleSubmit}>
            <Box className={clsx(classes.margin, classes.boxSlider)}>
                <Box className={classes.boxSliderText}>
                    <Typography className={patient.type === 'profesional'? classes.fontSelect : classes.fontNormal}>
                     Profesional
                    </Typography>
                    <Typography className={patient.type === 'paciente'? classes.fontSelect : classes.fontNormal}>
                        Paciente
                    </Typography>
                </Box>
                <Slider
                            className={clsx(classes.margin, classes.slider)}
                            defaultValue={0}
                            aria-labelledby="discrete-slider-small-steps"
                            step={100}
                            marks={marks}
                            selectionColor="green"
                            onChange={(e, v)=>{ v === 0 ? setPatient({...patient, type:"profesional"}):setPatient({...patient, type:"paciente"})}}
                            
                        />
                </Box>
                <Grid className={classes.firstGrid}>
                    
                    
                        <Grid item md={12}>
                            <FormControl>
                                <TextField
                                    label="No. de Identificación"
                                    id="dni"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="dni"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.dni}
                                    error={errors.dni && errors.dni.length > 0}
                                    helperText={errors.dni}
                                    autoComplete="off"
                                    
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Nombre"
                                    id="name"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="name"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.name}
                                    error={errors.name && errors.name.length > 0}
                                    helperText={errors.name}
                                    autoComplete="off"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <TextField
                                    label="Apellido"
                                    id="lastName"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="lastName"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.lastName}
                                    error={errors.lastName && errors.lastName.length > 0}
                                    helperText={errors.lastName}
                                    autoComplete="off"
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Telefono"
                                    id="phone"
                                    type="tel"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="phone"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.phone}
                                    error={errors.phone && errors.phone.length > 0}
                                    helperText={errors.phone}
                                    autoComplete="off"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            
                            <FormControl>
                                <TextField
                                    // helperText="Fecha de nacimiento"
                                    id="birth"
                                    type="date"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="birth"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.birth}
                                    error={errors.birth && errors.birth.length > 0}
                                    helperText={errors.birth}
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Dirección"
                                    id="address"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="address"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.address}
                                    error={errors.address && errors.address.length > 0}
                                    helperText={errors.address}
                                />
                            </FormControl>
                        </Grid> 
                        <Grid item md={12}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Selecciona tu pais</InputLabel>
                                <Select
                                    label="Selecciona tu pais"
                                    labelId="countries"
                                    id="country"
                                    className={classes.selectEmpty}
                                    inputProps={{ className: classes.labelTextField}}
                                    name="country"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.country}
                                    error={errors.country && errors.country.length > 0}
                                    helperText={errors.country}
                                    
                                >
                                    { countries && countries.map( (country,i) => {
                                        return (
                                            <MenuItem key={i} value={country.name}>
                                                <em>{country.name}</em>
                                            </MenuItem>
                                        )
                                    })}                           
                            </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                            </FormControl>
                        </Grid> 
                        <Grid item md={12}>

        {load==="cargando"? <Button variant="contained" color='secondary' disableElevation={true}>
              <CircularProgress size={20} />
            </Button> :  <Button type="submit" variant="contained" color='secondary'>
                                Sign In
                            </Button> }

                        </Grid>
                    
                </Grid> 
                </form>
            </Container>
        </>
    )
}