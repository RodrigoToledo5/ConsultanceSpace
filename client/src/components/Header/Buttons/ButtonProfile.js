import Button from '@material-ui/core/Button'
import { Box, makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useUser,useFirebaseApp } from "reactfire";
import { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
const useStyle=makeStyles(theme=>({
    btn:{
        margin: theme.spacing(1),
        minWidth:'84px'
        
    },
    alert:{
        position:"fixed",
        left:theme.spacing(40),
        right:theme.spacing(40),
        top:theme.spacing(2)

    }
}))

export default function ButtonProfile({onClick:onClick}){
    const user=useUser();
    let history=useHistory();
    const classes=useStyle();
    const firebase=useFirebaseApp();
    console.log(user.data.emailVerified)
    async function handleClick(event){
        onClick(event);
        if(!user.data.emailVerified)await firebase.auth().currentUser.sendEmailVerification();
        console.log(user.data.emailVerified);
    }

    return(
        <>
        <Button onClick={(event)=>handleClick(event)} type="button" variant='contained' className={classes.btn} >
            {user.data.emailVerified?"Perfil":"Enviar de nuevo"}
        </Button>
        <Box className={classes.alert}>
            {!user.data.emailVerified&&
                <Alert severity="info">
                    Mensaje de confirmación de email enviado, por favor checkea tu mail, puede que se encuentre en la casilla de spam, si el correo no fue recibido hay click en “Enviar de nuevo” para enviar el correo de confirmación nuevamente.
                </Alert>
            }
        </Box>
        </>
    )
}