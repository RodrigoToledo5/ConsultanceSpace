import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import 'firebase/auth';
import '../../firebase';
import { useFirebaseApp} from 'reactfire';
import { postSignIn, getCountries } from './actions';
import clsx from 'clsx';
import { FormControl, InputLabel, makeStyles, Grid, Container, TextField, Select, MenuItem, Button} from '@material-ui/core';
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
        paddingBottom: '5%'
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
    }
}));


export default function Sign(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const firebase = useFirebaseApp();
    const [email, setEmail] = useState('');
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
        country: ''
    });
    const countries = useSelector((state)=> state.reducerSign.countries);

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
        setEmail('')
        setPass('')
    }

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])

    return (
        <>
            <Container className={classes.divStyle}>
                <Grid className={classes.firstGrid}>
                    <form onSubmit={onHandleSubmit}>
                        <Grid item md={12}>
                            <FormControl>
                                <TextField
                                    label="No. de Identificación"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="dni"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.dni}
                                    error={errors.dni}
                                    helperText={errors.dni}
                                    
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Nombre"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="name"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.name}
                                    error={errors.name}
                                    helperText={errors.name}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <TextField
                                    label="Apellido"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="lastName"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.lastName}
                                    error={errors.lastName}
                                    helperText={errors.lastName}
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Email"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="email"
                                    type="email"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={email}
                                    error={errors.email}
                                    helperText={errors.email}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <TextField
                                    label="Clave"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="password"
                                    type="password"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={pass}
                                    error={errors.pass}
                                    helperText={errors.pass}
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    label="Confirmar clave"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="passwordconfirmation"
                                    type="password"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={passconfirmation}
                                    error={errors.pass}
                                    helperText={errors.pass}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <TextField
                                    label="Telefono"
                                    id="outlined-start-adornment"
                                    type="tel"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="phone"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.phone}
                                    error={errors.phone}
                                    helperText={errors.phone}
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    // helperText="Fecha de nacimiento"
                                    type="date"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="birth"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.birth}
                                    error={errors.birth}
                                    helperText={errors.birth}
                                />
                            </FormControl>
                        </Grid> 
                        <Grid item md={12}>
                            <FormControl>
                                <TextField
                                    label="Dirección"
                                    id="outlined-start-adornment"
                                    className={clsx(classes.margin, classes.textField)}
                                    variant="outlined"
                                    InputProps={{className: classes.labelTextField}}
                                    name="address"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.address}
                                    error={errors.address}
                                    helperText={errors.address}
                                />
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Selecciona tu pais</InputLabel>
                                <Select
                                    label="Selecciona tu pais"
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    className={classes.selectEmpty}
                                    inputProps={{ className: classes.labelTextField}}
                                    name="country"
                                    onChange={(event)=>onHandleChange(event)}
                                    value={patient.country}
                                    error={errors.country}
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
                        </Grid> 
                        <Grid item md={12}>
                            <Button type="submit" variant="contained" color='secondary'>
                                Sign In
                            </Button>
                        </Grid>
                    </form>
                </Grid> 
            </Container>
        </>
    )
}