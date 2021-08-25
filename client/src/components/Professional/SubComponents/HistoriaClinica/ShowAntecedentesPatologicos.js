import { Box, Typography, makeStyles, InputLabel, Button } from "@material-ui/core";
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useEffect, useState } from "react";
import axios from "axios";
import Pdf from "react-to-pdf";

const api = 'http://localhost:3001';


const useStyle = makeStyles((theme) => ({

    text: {
        color: "#000",
        marginTop: "3px"
    },
    box: {
        padding: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
        color: "#000",
        justifyContent: "flex-start",
        flexWrap: "wrap",
    },
    label: {
        margin: "10px",
        marginLeft: "15px",
        marginRight: "15px",
        padding: "10xp",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        minWidth: "120px",
        
        alignItems: "center"
    },
    asides: {
        display: "flex",
        flexDirection: "column",
        justifyContent: " space-evenly",
    },
    textbox: {
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        minHeight: "100px",
        maxWidth:"350px",
    },
    input: {
        resize: "none",
        minWidth: "350px",
        maxWidth: "350px",
        minHeight: "80px",
        padding: "5px"
    },
    btn: {
        maxWidth: "150px",
        marginLeft: "100px",
        marginRight: "100px"
    },
    btn_container: {
        display: "flex",
        justifyContent: "flex-end"
    },
    checkbox: {
        cursor: "pointer",
        width: "20px",
        height: "20px",
    },
    title: {
        margin: "10px",
        textAlign: "center",
        fontFamily: "Lato",
        fontSize: "20px"
    },
    planilla:{
        padding:"20px",
        marginTop:"10px",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end"
    },
    date:{
        textAlign:"center"
    }

}));
const ref=React.createRef()

export default function ShowAntecedentesNoPatogolicos({ idPaciente }) {
    const [historia, setHistoria] = useState({})
    const classes = useStyle();
    /// usamos renderer prop
    useEffect(async () => {
        const res = await axios.get(`${api}/medicalRecord?idPaciente=1`)
        console.log(res)
        setHistoria(res.data);
    }, [setHistoria])
    function formatName(string){
        if(string){
            return string[0]+string.substring(1,string.length).toLowerCase()

        }
        
    }

    return (
        <div className={classes.planilla}>
            <div ref={ref} className={classes.planilla}>
            <Typography className={classes.title}>Antecedente patológico:
            {
                formatName(historia.nombre)+' '+formatName(historia.apellidos)
                } 
            </Typography>
            <Typography className={classes.date}>
               Creado: {historia.antecedentesNoPatologico&&historia.antecedentesNoPatologico.createdAt}
            </Typography>
            <Typography>
               Actualizado: {historia.antecedentesNoPatologico&&historia.antecedentesNoPatologico.updatedAt}
            </Typography>
            {/* bolean starts */}
                <div className={classes.asides}>
                    <div className={classes.box}>
                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="nombre">
                                Diabetes:
                            </label>

                            <Typography
                                id="diabetes"
                                name="diabetes"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.diabetes === true ? " Si" : " No"}
                            </Typography>

                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="embarazo">
                                Embarazo:
                            </label>
                            <Typography
                                id="embarazo"
                                name="embarazo"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.embarazo === true ? " Si" : " No"}
                            </Typography>
                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="parasitos">
                                Parasitos:
                            </label>

                            <Typography
                                id="parasitos"
                                name="parasitos"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.parasito === true ? " Si" : " No"}
                            </Typography>

                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="sarampion">
                                Sarampión:
                            </label>

                            <Typography className={classes.checkbox}
                                id="sarampion"
                                name="sarampion"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.sarampion === true ? " Si" : " No"}
                            </Typography>
                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="amigdalitis">
                                Amigdalitis:
                            </label>
                            <Typography className={classes.checkbox}
                                type="checkbox"
                                id="amigdalitis"
                                name="amigdalitis"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.amigdalitis === true ? " Si" : " No"}
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.box}>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="epilepsia">
                                Epilepsia:
                            </label>
                            <Typography className={classes.checkbox}
                                type="checkbox"
                                id="epilepsia"
                                name="epilepsia"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.epilepsia === true ? " Si" : " No"}
                            </Typography>


                        </div>



                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="hepatitis">
                                Hepatitis:
                            </label>
                            <Typography
                                id="hepatitis"
                                name="hepatitis"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.hepatitis === true ? " Si" : " No"}
                            </Typography>
                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="tosferina">
                                Tosferina:
                            </label>
                            <Typography className={classes.checkbox}
                                id="tosferina"
                                name="tosferina"

                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.tosferina === true ? " Si" : " No"}
                            </Typography>


                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="hemorragias">
                                Hemorragias:
                            </label>
                            <Typography
                                id="hemorragias"
                                name="hemorragias"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.hemorragias === true ? " Si" : " No"}
                            </Typography>
                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="cardiopatias">
                                Cardiopatías:
                            </label>
                            <Typography
                                id="cardiopatias"
                                name="cardiopatias"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.cardiopatias === true ? " Si" : " No"}
                            </Typography>

                        </div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.label}>

                            <label className={classes.text} htmlFor="hipotension">
                                Hipotensión:
                            </label>
                            <Typography
                                id="hipotension"
                                name="hipotension"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.hipotension === true ? " Si" : " No"}
                            </Typography>
                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="hipertension">
                                Hipertensión:
                            </label>
                            <Typography className={classes.text} className={classes.checkbox}
                                id="hipertension"
                                name="hipertension"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.hipertension === true ? " Si" : " No"}
                            </Typography>
                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="fiebre_reumatica">
                                Fiebre reumática:
                            </label>
                            <Typography
                                id="fiebre_reumatica"
                                name="fiebre_reumatica"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.fiebre_reumatica === true ? " Si" : " No"}
                            </Typography>


                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="paludismo">
                                Paludismo:
                            </label>
                            <Typography
                                id="paludismo"
                                name="paludismo"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.paludismo === true ? " Si" : " No"}
                            </Typography>


                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="VIH">
                                VIH/SIDA:
                            </label>
                            <Typography
                                id="VIH"
                                name="VIH"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.VIH === true ? " Si" : " No"}
                            </Typography>


                        </div>
                    </div>
                    <div className={classes.box}>


                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="cooperador">
                                Es cooperador?:
                            </label>
                            <Typography
                                id="cooperador"
                                name="cooperador"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.cooperador === true ? " Si" : " No"}
                            </Typography>


                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="orientado">
                                Esta bien orientado?:
                            </label>
                            <Typography
                                id="orientado"
                                name="orientado"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.orientado === true ? " Si" : " No"}

                            </Typography>


                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="bajo_tratamiento">
                                Está bajo algún tratamiento médico?:
                            </label>
                            <Typography
                                id="bajo_tratamiento"
                                name="bajo_tratamiento"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.bajo_tratamiento === true ? " Si" : " No"}
                            </Typography>


                        </div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="pildoras_anticonceptivas">
                                Toma píldoras anticonceptivas?:
                            </label>
                            <Typography
                                id="pildoras_anticonceptivas"
                                name="pildoras_anticonceptivas"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.pildoras_anticonceptivas === true ? " Si" : " No"}
                            </Typography>
                        </div>

                        <div className={classes.label}>
                            <label className={classes.text} htmlFor="transfusion">
                                Recibió  una transfusión de sangre?:
                            </label>
                            <Typography
                                id="transfusion"
                                name="transfusion"
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.transfusion === true ? " Si" : " No"}
                            </Typography>


                        </div>
                    </div>
                    {/* bolean ends*/}
                    {/* string starts*/}
                    <div className={classes.box}>
                        <div className={classes.textbox}>
                            <label htmlFor="enfermedades_infancia">
                                Qué enfermedades ha padecido durante su infancia?
                            </label>
                            <Typography
                                id="enfermedades_infancia"
                                name="enfermedades_infancia"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.enfermedades_infancia ? historia.antecedentesNoPatologico.enfermedades_infancia : "No"}

                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="accidente">
                                Ha tenido algún accidente?
                            </label>
                            <Typography
                                id="accidente"
                                name="accidente"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.accidente ? historia.antecedentesNoPatologico.accidente : "No"}

                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="operacion">
                                Lo han operado alguna vez?
                            </label>
                            <Typography
                                id="operacion"
                                name="operacion"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.operacion ? historia.antecedentesNoPatologico.operacion : "No"}

                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="alergia">
                                Es alérgico a algún medicamento, alimento u otra causa?
                            </label>
                            <Typography
                                id="alergia"
                                name="alergia"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.alergia ? historia.antecedentesNoPatologico.alergia : "No"}
                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="constitucion">
                                Constitución
                            </label>
                            <Typography
                                id="constitucion"
                                name="constitucion"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.constitucion ? historia.antecedentesNoPatologico.constitucion : "Sin completar"}
                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="complexion">
                                Complexión
                            </label>
                            <Typography
                                id="complexion"
                                name="complexion"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.complexion ? historia.antecedentesNoPatologico.complexion : "Sin completar"}
                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="facies">
                                Facies Característica
                            </label>
                            <Typography
                                id="facies"
                                name="facies"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.facies ? historia.antecedentesNoPatologico.facies : "Sin completar"}
                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="conformacion">
                                Conformación corporal
                            </label>
                            <Typography
                                id="conformacion"
                                name="conformacion"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.conformacion ? historia.antecedentesNoPatologico.conformacion : "Sin completar"}

                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="moviemientos_anormales">
                                Moviemientos anormales
                            </label>
                            <Typography
                                id="moviemientos_anormales"
                                name="moviemientos_anormales"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.moviemientos_anormales ? historia.antecedentesNoPatologico.moviemientos_anormales : "Sin completar"}

                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="marcha_patologicas">
                                Marcha patológicas
                            </label>
                            <Typography
                                id="marcha_patologicas"
                                name="marcha_patologicas"
                                placeholder="Detalles..."
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.marcha_patologicas ? historia.antecedentesNoPatologico.marcha_patologicas : "Sin completar"}
                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="ETS">
                                Ha pedecido E.T.S?
                            </label>
                            <Typography
                                id="ETS"
                                name="ETS"
                                placeholder="Detalles..."
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.ETS ? historia.antecedentesNoPatologico.ETS : "Sin completar"}

                            </Typography>
                        </div>

                        <div className={classes.textbox}>
                            <label htmlFor="comentarios">
                                Comentarios
                            </label>
                            <Typography
                                id="comentarios"
                                name="comentarios"
                                className={classes.input}
                            >
                                {historia.antecedentesNoPatologico && historia.antecedentesNoPatologico.comentarios ? historia.antecedentesNoPatologico.comentarios : "Sin completar"}
                            </Typography>
                        </div>
                    </div>

                </div>
            {/* string ends*/}
            </div>
            <Pdf scale={0.8} targetRef={ref} filename="Antecedentes Patologicos.pdf" className={classes.btn_container}>
              {({toPdf})=>  <Button onClick={toPdf} className={classes.btn} >Descargar</Button>}
            </Pdf>


        </div>
    )
}