import Button from '@material-ui/core/Button'
import { makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { desLog, postLogIn } from '../Log/actions';
import { useFirebaseApp,useUser} from 'reactfire'
import app from "firebase/app";
import "firebase/auth";
import "../../firebase/firebase";
import { useEffect } from 'react';

const useStyle=makeStyles(theme=>({
    btn:{
        margin: theme.spacing(1),
        minWidth:'84px'
        
    },
}))

export default function ButtonDashboard(){
    const classes=useStyle();
    const dispatch=useDispatch();
    let history = useHistory();
    const loggedUser = useUser();
    const user = useSelector((store) => store.reducerLog.user);
    


    const toDashboard = ()=>{
        if(user.email && user.tipo_usuario)
        {user.tipo_usuario === 'profesional'? history.push('/profesional-dashboard') : history.push('/patient-dashboard')}
    }
    return(
        <Button type="button" variant='contained' className={classes.btn} onClick={()=>toDashboard()}>
            Panel
        </Button>
    )
}

