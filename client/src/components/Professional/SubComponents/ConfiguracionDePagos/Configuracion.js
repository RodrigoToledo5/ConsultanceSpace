import { Typography, makeStyles, Button, Box } from "@material-ui/core";
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IMG from"../../../../assets/img/configuracion/configuracion.gif"




const useStyle = makeStyles((theme) => ({
    constainer: {
        fontFamily: "Lato",
        display:"flex",
        flexDirection:"column"
    },
    title: {
        margin:"10px",
        textAlign: "center",
        fontFamily: "Lato",
        fontSize: "20px"
    },
    btn_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "Wrap",
        margin:"10px"
    },
    btn: {
        margin: "10px",
        width: "200px",
        textAlign: "center"
    },
    head: {
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid black",
        borderTop: "1px solid black",
        margin: "10px",
    },
    data: {
        display: "flex",
        margin: "3px",
    },
    alert: {
        margin: "10px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        minHeight: "200px",
        maxWidth: "200px",
        textAlign: "justify",
        padding:"60px",
        backgroundColor:"rgb(232, 240, 254)",
        borderRadius:"10px",
        fontFamily:"Lato",
        fontSize:"18px"
    },
    img: {
        backgroundImage: `url(${IMG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius:"10px",
        minHeight:"200xp",
        minWidth:"600px"
    }
}));

var ref = React.createRef();


export default function Configuracion() {
    const patient = useSelector((store) => store.reducerLog.actPatient);
    const classes = useStyle();
    const historia = useSelector(state => state.reducerHistory.history)
    const dispatch = useDispatch();


    /// usamos renderer prop
    // function handleClick(){
    //     https://auth.mercadopago.com.ar/authorization?client_id=2493068614496087&response_type=code&platform_id=mp&redirect_uri=https://consultancespace.vercel.app/payments&state=client

    // }


    return (
        <div className={classes.container}>
                <Typography className={classes.title}>Credenciales de pago
                </Typography>
                <Box className={classes.btn_container}>
                    <Typography className={classes.text}>
                        En esta sección usted podrá configurar su credencial para poder enviar links de pago automáticamente a sus clientes con mercado pago.
                    </Typography>
                    <Box className={classes.img}>
                       
                    </Box>
                </Box>
                <Alert className={classes.alert} severity="info"> Para realizar dicha configuración simplemente haga click en configurar</Alert>
                <div className={classes.btn_container}>
                    <Button
                        href="https://auth.mercadopago.com.ar/authorization?client_id=2493068614496087&response_type=code&platform_id=mp&redirect_uri=https://consultancespace.vercel.app/payments&state=client"
                        className={classes.btn}>
                        Configurar
                    </Button>
                </div>
        </div>
    )
}
