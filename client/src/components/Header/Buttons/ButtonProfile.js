import Button from '@material-ui/core/Button'
import { makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useUser } from "reactfire";
import { useState } from 'react';
const useStyle=makeStyles(theme=>({
    btn:{
        margin: theme.spacing(1),
        minWidth:'84px'
        
    },
}))

export default function ButtonProfile({onClick}){
    const user=useUser();
    let history=useHistory();
    const classes=useStyle();
    const [confirmation,setConfirmation]=useState(false);
    console.log(user.data.emailVerified)
    return(
        <Button onClick={(event)=>onClick(event)} type="button" variant='contained' className={classes.btn} >
            {user.data.emailVerified?"Perfil":"Confirma tu email"}
        </Button>
    )
}