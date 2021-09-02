import { Typography, makeStyles, Button } from "@material-ui/core";
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";



const useStyle = makeStyles((theme) => ({
    constainer:{
        fontFamily:"Lato"
    },
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
    },
    head:{
        display:"flex",
        flexDirection:"column",
        borderBottom:"1px solid black",
        borderTop:"1px solid black",
        margin:"10px",
    },
    data:{
        display:"flex",
        margin:"3px",
    },
    alert:{
        margin:"10px",
        display:"flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
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
            <div >
                <Typography className={classes.title}>Credenciales de pago
                </Typography>

                <Alert></Alert>

                <div className={classes.btn_container}> 
                <Button href="https://auth.mercadopago.com.ar/authorization?client_id=2493068614496087&response_type=code&platform_id=mp&redirect_uri=https://consultancespace.vercel.app/payments&state=client"
                 className={classes.btn}
                    onClick={""} >
                   Configurar
                </Button>
                </div>
            </div>
        </div>
    )
}
