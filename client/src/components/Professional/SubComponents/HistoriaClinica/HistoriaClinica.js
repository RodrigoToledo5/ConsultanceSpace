import { Box, Typography, makeStyles, InputLabel, Button } from "@material-ui/core";
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useEffect, useState } from "react";
import axios from "axios";
import Pdf from "react-to-pdf";
import { useSelector, useDispatch } from "react-redux";
import AntecedentesPatogolicos from "./AntecedentesPatologicos";
import AntecedentesNoPatogolicos from "./AntecedentesNoPatologicos";
import ShowAntecedentesNoPatogolicos from "./ShowAntecedentesNoPatologicos";
import ShowAntecedentesPatogolicos from "./ShowAntecedentesPatologicos";
import { searchHistory } from "./actions";

const api = 'http://localhost:3001';


const useStyle = makeStyles((theme) => ({
    title: {
        margin: "10px",
        textAlign: "center",
        fontFamily: "Lato",
        fontSize: "20px"
    },
    btn_container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        flexWrap:"Wrap"
    },
    btn:{
        margin:"10px",
        width: "200px",
    }
}));

var ref = React.createRef();

export default function HistoriaClinica() {
    const patient = useSelector((store) => store.reducerLog.actPatient);
    const classes = useStyle();
    const [seccion, setSeccion] = useState("");
    const historia = useSelector(state => state.reducerHistory.history)
    const dispatch = useDispatch()

    /// usamos renderer prop
    function formatName(string) {
        if (string) {
            return string[0] + string.substring(1, string.length).toLowerCase()

        }

    }
    function handleClick(event) {
        console.log(patient.id)
        setSeccion(event.target.outerText)
    }
    useEffect(() => {
        dispatch(searchHistory(patient.id))
    }, [dispatch, patient.id])
    useEffect(()=>{
        dispatch(searchHistory(patient.id))
    },[dispatch,patient.id,seccion])
    return (
        <div>
            <div >
                <Typography className={classes.title}>Historia Clinica:{" "}
                    {
                        formatName(patient.nombre) + ' ' + formatName(patient.apellidos)
                    }
                </Typography>
                <div className={classes.btn_container}> 
                {<Button className={classes.btn} onClick={(event) => handleClick(event)} >
                    CARGAR ANTECEDENTES PATOLOGICOS
                </Button>}

                { <Button className={classes.btn} onClick={handleClick} >
                    CARGAR ANTECEDENTES NO PATOLOGICOS
                </Button>}

                {historia.antecedentesPatologico && <Button className={classes.btn} onClick={handleClick} >
                    Ver Antecedentes Patologicos
                </Button>}

                {historia.antecedentesNoPatologico && <Button className={classes.btn} onClick={handleClick} >
                    Ver Antecedentes No Patologicos
                </Button>}
                </div>
            </div>

            {     
            seccion === "CARGAR ANTECEDENTES PATOLOGICOS" &&
                <AntecedentesPatogolicos 
                    idPaciente={patient.id}
                    historia={historia}
                />}

            {seccion === "CARGAR ANTECEDENTES NO PATOLOGICOS"&&
                <AntecedentesNoPatogolicos
                    idPaciente={patient.id} 
                    historia={historia}
                />
            }
            {seccion === "VER ANTECEDENTES PATOLOGICOS"&&
                <ShowAntecedentesPatogolicos 
                    idPaciente={patient.id}
                />
            }
            {seccion === "VER ANTECEDENTES NO PATOLOGICOS" &&
                <ShowAntecedentesNoPatogolicos 
                    idPaciente={patient.id}
                />
            }

        </div>
    )
}
