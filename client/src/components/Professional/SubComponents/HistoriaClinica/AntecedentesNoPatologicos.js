import { Box, Typography, makeStyles, InputLabel, Button } from "@material-ui/core";
import { Formik, Field, Form } from 'formik'
import Alert from '@material-ui/lab/Alert';
import { useState } from "react";
import axios from "axios";
const api = 'http://localhost:3001';


const useStyle = makeStyles((theme) => ({

    text: {
        color: "#159DE9",
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
        minHeight: "100px"
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
    }

}));


export default function AntecedentesNoPatogolicos() {
    const [hassend, setHasSend] = useState(false)
    const classes = useStyle();
    /// usamos renderer prop
    return (
        <>
            <Formik
                initialValues={{
                    alcoholismo: null,
                    tabaquismo: null,
                    tatuajes: null,
                    alimentacion: "",
                    higiene_corporal: "",
                    higiene_bucal: "",
                    vacunas: "",
                    toxicomanias: "",
                    comentarios: "",
                    antecedentesNoPatologicos: true,
                    idPaciente: 1,
                }}
                onSubmit={
                    async (values, { resetForm }) => {

                        const send = await axios({
                            method: 'POST',
                            url: `${api}/medicalRecord`,
                            data: values
                        })

                        console.log(send);
                        resetForm();
                        setHasSend(true);
                        setTimeout(() => setHasSend(false), 5000)
                    }
                }
            >
                {() => (
                    <Form >
                        <Typography className={classes.title}>Antecedente No patológico </Typography>
                        {/* bolean starts */}
                        <div className={classes.asides}>
                            <div className={classes.box}>
                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="alcoholismo"
                                        name="alcoholismo"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="alcoholismo">
                                        Alcoholismo
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="tabaquismo"
                                        name="tabaquismo"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="tabaquismo">
                                        Tabaquismo
                                    </label>

                                </div>

                                <div className={classes.label}>
                                    <Field className={classes.checkbox}
                                        type="checkbox"
                                        id="tatuajes"
                                        name="tatuajes"
                                    >
                                    </Field>
                                    <label className={classes.text} htmlFor="tatuajes">
                                        Tatuajes
                                    </label>

                                </div>
                            </div>
                        </div>
                        {/* bolean ends*/}

                        {/* string starts*/}
                        <div className={classes.box}>
                            <div className={classes.textbox}>
                                <label htmlFor="alimentacion">
                                    Alimentación del paciente:
                                </label>
                                <Field
                                    as="textarea"
                                    id="alimentacion"
                                    name="alimentacion"
                                    placeholder="Detalles..."
                                    className={classes.input}
                                >
                                </Field>
                            </div>

                            <div className={classes.textbox}>
                                <label htmlFor="higiene_corporal">
                                    Higiene corporal:
                                </label>
                                <Field
                                    as="textarea"
                                    id="higiene_corporal"
                                    name="higiene_corporal"
                                    placeholder="Frecuencia de baño...cambio de ropa"
                                    className={classes.input}
                                >
                                </Field>
                            </div>

                            <div className={classes.textbox}>
                                <label htmlFor="higiene_bucal">
                                    Higiene bucal:
                                </label>
                                <Field
                                    as="textarea"
                                    id="higiene_bucal"
                                    name="higiene_bucal"
                                    placeholder="Cepillado, número de veces al día...Como?"
                                    className={classes.input}
                                >
                                </Field>
                            </div>

                            <div className={classes.textbox}>
                                <label htmlFor="vacunas">
                                    Vacunas:
                                </label>
                                <Field
                                    as="textarea"
                                    id="vacunas"
                                    name="vacunas"
                                    placeholder="Si...No?... Cuales?"
                                    className={classes.input}
                                >
                                </Field>
                            </div>

                            <div className={classes.textbox}>
                                <label htmlFor="toxicomanias">
                                    Toxicomanias
                                </label>
                                <Field
                                    as="textarea"
                                    id="toxicomanias"
                                    name="toxicomanias"
                                    placeholder="Si...No?... Cuales?"
                                    className={classes.input}
                                >
                                </Field>
                            </div>

                            <div className={classes.textbox}>
                                <label htmlFor="comentarios">
                                    Comentarios:
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