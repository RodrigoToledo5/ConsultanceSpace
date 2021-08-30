import React, { useState} from 'react'
import { useSelector } from "react-redux";
import { makeStyles,Typography,Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Formik, Field, Form,ErrorMessage } from 'formik';
import { useUser } from 'reactfire';

const useStyle = makeStyles((theme) => ({
    errors:{
        color:"#CC0000",
        fontFamily:"Lato",
    },
    text: {
        color: "#159DE9",
        marginTop: "3px",
        fontFamily:"Lato"
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
        justifyContent: "center",
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
        minHeight: "200px"
    },
    input: {
        resize: "none",
        minWidth: "350px",
        maxWidth: "350px",
        minHeight: "200px",
        padding: "5px"
    },
    btn: {
        maxWidth: "150px",
        position:"relative",
        right:"30%" ,
        "@media (max-width:900px)": {
            right:"0%" ,
        },
    },
    btn_container: {
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width:900px)": {
            justifyContent: "center",
        },
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
        fontSize: "30px"
    }

}));

export default function Mail(){
    const [hassend, setHasSend] = useState(false)
    const classes = useStyle();
    const nombre = useSelector(state => state.reducerLog.info.fullName);
    const email=useSelector(state=>state.reducerLog.info.usuarioEmail)
    const user=useUser();
    return(
        <Formik
                initialValues={{
                    mensaje: "",
                    subjet:`Mensaje de ${nombre}`,
                    mailtarget: "",
                    mailseader: email,
                    paciente:true,
                }}
                validate={(valores)=>{
                    let errors={};
                    if(!valores.mensaje){
                        errors.mensaje=' Por favor escriba su mensaje'
                    }
                    return errors;
                }}
                onSubmit={
                    async (values, { resetForm }) => {
                        // if(!historia.antecedentesNoPatologico){
                        //     const send = await axios({
                        //         method: 'POST',
                        //         url: `${api}/medicalRecord`,
                        //         data: values
                        //     })
                        //     console.log("no tiene");
                        // }
                        // else{
                        //     const send = await axios({
                        //         method: 'PUT',
                        //         url: `${api}/medicalRecord`,
                        //         data: values
                        //     })
                        //     console.log(values);
                        // }
                        resetForm();
                        setHasSend(true);
                        setTimeout(() => setHasSend(false), 5000)
                    }
                }
            >
                {({errors}) => (
                    <Form >
                        <Typography className={classes.title}>Mensaje a:mail@gnerico.com</Typography>
                        
                        {/* string starts*/}
                        <div className={classes.box}>
                            <div className={classes.textbox}>
                                <label className={classes.email} htmlFor="mensaje">
                                    Mi correo: {user.data&&user.data.email}
                                </label>
                                <Field
                                    as="textarea"
                                    id="mensaje"
                                    name="mensaje"
                                    placeholder="Escriba su mensaje..."
                                    className={classes.input}
                                >
                                </Field>
                                <ErrorMessage  name="mensaje" component={()=>(
                                        errors.mensaje&& <div className={classes.errors}>{errors.mensaje};</div> 
                                    )}/> 
                            </div>                      
                        </div>
                        {/* string ends*/}
                    <div className={classes.btn_container}>
                        <Button className={classes.btn} type="submit">Enviar</Button>
                    </div>
                    {hassend && <Alert>Mail enviado</Alert>}
                </Form>)}
            </Formik>
    )
}
