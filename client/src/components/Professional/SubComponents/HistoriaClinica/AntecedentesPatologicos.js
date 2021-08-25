import { Box, Typography, makeStyles, InputLabel,Button } from "@material-ui/core";
import { Formik, Field, Form } from 'formik'
import Alert from '@material-ui/lab/Alert';
import { useState } from "react";


const useStyle = makeStyles((theme) => ({

    text: {
        color: "#159DE9",
        marginTop:"3px"
    },
    box: {
        padding: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
        color: "#159DE9",
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
        alignItems:"center"
    },
    asides: {
        display: "flex",
        flexDirection: "column",
        justifyContent: " space-evenly",
    },
    textbox:{
        display:"flex",
        flexDirection:"column",
        padding:"10px",
        minHeight:"100px"
    },
    input:{
        resize: "none",
        minWidth:"350px",
        maxWidth:"350px",
        minHeight:"80px",
        padding:"5px"
    },
    btn:{
        maxWidth:"150px",
        marginLeft:"100px",
        marginRight:"100px"
    },
    btn_container:{
        display:"flex",
        justifyContent:"flex-end"
    },
    checkbox:{
        cursor:"pointer",
        width:"20px",
        height:"20px",
    },
    title:{
        margin:"10px",
        textAlign:"center",
        fontFamily:"Lato",
        fontSize:"20px"
    }

}));


export default function AntecedentesPatogolicos() {
    const [hassend, setHasSend] = useState(false)
    const classes = useStyle();
    /// usamos renderer prop
    return (
        <>
            <Formik
                initialValues={{
                    diabetes: null,
                    embarazo: null,
                    parasitos: null,
                    sarampion: null,
                    amigdalitis: null,
                    epilepsia: null,
                    transfusion: null,
                    coperador: null,//si es el paciente es coperador
                    orientado: null,//si esta orientado con lo que tiene, tuvo un buen seguimiento
                    bajo_tratamiento: null,
                    pildoras_anticonceptivas: null,
                    hepatitis: null,
                    tosferina: null,
                    hemorragias: null,
                    cardiopatias: null,
                    hipotension: null,
                    hipertension: null,
                    fiebre_reumatica: null,
                    paludismo: null,
                    VIH: null,
                    enfermedades_infancia: "",
                    accidente: "",//desarrolle,
                    operacion: "",
                    alergia_medicamento: "",
                    constitucion: "",
                    complexion: "",
                    facies: "",
                    conformacion: "",
                    moviemientos_anormales: "",//explayar en caso de que si
                    marcha_patologicas: "",
                    ETS: "",//explayese 
                    comentarios: "",
                }}
                onSubmit={
                    (values, { resetForm }) => {
                        console.log(values,);
                        resetForm();
                        setHasSend(true);
                        setTimeout(() => setHasSend(false), 5000)
                    }
                }
            >
                {() => (
                    <Form >
                        <Typography className={classes.title}>Antecedente patológico </Typography>
                        {/* bolean starts */}
                        <div className={classes.asides}>
                            <div className={classes.box}>
                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="diabetes"
                                        name="diabetes"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="nombre">
                                        Diabetes
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="embarazo"
                                        name="embarazo"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="embarazo">
                                        Embarazo
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="parasitos"
                                        name="parasitos"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="parasitos">
                                        Parasitos
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="sarampion"
                                        name="sarampion"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="sarampion">
                                        Sarampión
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="amigdalitis"
                                        name="amigdalitis"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="amigdalitis">
                                        Amigdalitis
                                    </label>

                                </div>
                            </div>
                            <div className={classes.box}>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="epilepsia"
                                        name="epilepsia"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="epilepsia">
                                        Epilepsia
                                    </label>

                                </div>



                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="hepatitis"
                                        name="hepatitis"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="hepatitis">
                                        Hepatitis
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="tosferina"
                                        name="tosferina"

                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="tosferina">
                                        Tosferina
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="hemorragias"
                                        name="hemorragias"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="hemorragias">
                                        Hemorragias
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="cardiopatias"
                                        name="cardiopatias"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="cardiopatias">
                                        Cardiopatías
                                    </label>

                                </div>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="hipotension"
                                        name="hipotension"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="hipotension">
                                        Hipotensión
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.text} className={classes.checkbox}
                                        type="checkbox"
                                        id="hipertension"
                                        name="hipertension"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="hipertension">
                                        Hipertensión
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="fiebre_reumatica"
                                        name="fiebre_reumatica"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="fiebre_reumatica">
                                        Fiebre reumática
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="paludismo"
                                        name="paludismo"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="paludismo">
                                        Paludismo
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="VIH"
                                        name="VIH"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="VIH">
                                        VIH/SIDA
                                    </label>

                                </div>
                            </div>
                            <div className={classes.box}>


                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="coperador"
                                        name="coperador"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="coperador">
                                        Es coperador?
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="orientado"
                                        name="orientado"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="orientado">
                                        Esta bien orientado?
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="bajo_tratamiento"
                                        name="bajo_tratamiento"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="bajo_tratamiento">
                                        Está bajo algún tratamiento médico?
                                    </label>

                                </div>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="pildoras_anticonceptivas"
                                        name="pildoras_anticonceptivas"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="pildoras_anticonceptivas">
                                        Toma píldoras anticonceptivas?
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="transfusion"
                                        name="transfusion"

                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="transfusion">
                                        Recibió  una transfusión de sangre?
                                    </label>

                                </div>
                            </div>
                            {/* bolean ends*/}
                            {/* string starts*/}
                            <div className={classes.box}>
                                <div className={classes.textbox}>
                                    <label htmlFor="enfermedades_infancia">
                                        Qué enfermedades ha padecido durante su infancia?
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="enfermedades_infancia"
                                        name="enfermedades_infancia"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="accidente">
                                        Ha tenido algún accidente?
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="accidente"
                                        name="accidente"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="operacion">
                                        Lo han operado alguna vez?
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="operacion"
                                        name="operacion"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="alergia">
                                        Es alérgico a algún medicamento, alimento u otra causa?
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="alergia"
                                        name="alergia"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="constitucion">
                                        Constitución
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="constitucion"
                                        name="constitucion"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="complexion">
                                        Complexión
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="complexion"
                                        name="complexion"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="facies">
                                        Facies Característica
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="facies"
                                        name="facies"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="conformacion">
                                        Conformación corporal
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="conformacion"
                                        name="conformacion"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="moviemientos_anormales">
                                        Moviemientos anormales
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="moviemientos_anormales"
                                        name="moviemientos_anormales"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="marcha_patologicas">
                                        Marcha patológicas
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="marcha_patologicas"
                                        name="marcha_patologicas"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="ETS">
                                        Ha pedecido E.T.S?
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="ETS"
                                        name="ETS"
                                        placeholder="Detalles..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>

                                <div className={classes.textbox}>
                                    <label htmlFor="comentarios">
                                        Comentarios
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="comentarios"
                                        name="comentarios"
                                        placeholder="Explayese..."
                                        className={classes.input}
                                    >
                                    </Field>
                                </div>
                            </div>
                            
                        </div>
                        {/* string ends*/}
                        <div className={classes.btn_container}>
                            <Button className={classes.btn} type="submit">Enviar</Button>
                        </div>
                        {hassend && <Alert>Antecedentes Patologicos enviados</Alert>}
                    </Form>)}
            </Formik>
        </>
    )
}