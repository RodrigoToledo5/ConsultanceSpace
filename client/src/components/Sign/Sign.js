import React, {useEffect, useState} from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { FormControl, InputLabel, makeStyles, Grid, Container, TextField, Select, MenuItem} from '@material-ui/core';
import { blue} from '@material-ui/core/colors';

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
    const [patient, setPatient] = useState({
        dni: '',
        name: '',
        lastName: '',
        phone: '',
        birth: '',
        address:'',
        country: ''
    });
    const [countries, setCountries]=useState([]);

    const onHandleChange = (e) => {
        e.preventDefault();
        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        })
    }

    const getCountries = async ()=>{
         await axios('https://restcountries.eu/rest/v2/all')
        .then(res=> {
            const country = res.data;
            console.log(country)
            setCountries(country)
        })
    }

    useEffect(()=>{
        getCountries();
    },[])


    return (
        <>
            <Container className={classes.divStyle}>
                <Grid className={classes.firstGrid}>
                    <Grid item md={12}>
                        <FormControl>
                            <TextField
                                label="No. de Identificación"
                                id="outlined-start-adornment"
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                InputProps={{className: classes.labelTextField}}
                                name="dni"
                                onChange={onHandleChange}
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
                                onChange={onHandleChange}
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
                                onChange={onHandleChange}
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
                                onChange={onHandleChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <TextField
                                label="Constraseña"
                                id="outlined-start-adornment"
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                InputProps={{className: classes.labelTextField}}
                                name="password"
                                type="password"
                                onChange={onHandleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Confirmar Constraseña"
                                id="outlined-start-adornment"
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                InputProps={{className: classes.labelTextField}}
                                name="password"
                                type="password"
                                onChange={onHandleChange}
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
                                onChange={onHandleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                helperText="Fecha de nacimiento"
                                type="date"
                                className={clsx(classes.margin, classes.textField)}
                                variant="outlined"
                                InputProps={{className: classes.labelTextField}}
                                name="birth"
                                onChange={onHandleChange}
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
                                onChange={onHandleChange}
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
                                onChange={onHandleChange}
                            >
                                { countries && countries.map( country => {
                                    return (
                                        <MenuItem value={country.name}>
                                            <em>{country.name}</em>
                                        </MenuItem>
                                    )
                                })}                           
                        </Select>
                        </FormControl>
                    </Grid>           
                </Grid> 
            </Container>
        </>
    )
}