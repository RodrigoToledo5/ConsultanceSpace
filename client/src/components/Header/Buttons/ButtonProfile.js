import Button from '@material-ui/core/Button'
import { makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useUser,useFirebaseApp } from "reactfire";
import { useState } from 'react';
const useStyle=makeStyles(theme=>({
    btn:{
        margin: theme.spacing(1),
        minWidth:'84px'
        
    },
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
        <Button onClick={(event)=>handleClick(event)} type="button" variant='contained' className={classes.btn} >
            {user.data.emailVerified?"Perfil":"Verificar Email"}
        </Button>
    )
}