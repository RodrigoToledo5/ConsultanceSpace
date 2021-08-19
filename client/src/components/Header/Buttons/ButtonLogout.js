import Button from '@material-ui/core/Button'
import { makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { desLog } from '../../Log/actions';
import app from "firebase/app";
import "firebase/auth";
import "../../../firebase/firebase";

const useStyle=makeStyles(theme=>({
    btn:{
        margin: theme.spacing(1),
        minWidth:'84px',
    },
}))

export default function ButtonLogout({setLogFlag}){
    const classes=useStyle();
    const dispatch=useDispatch();
    let history = useHistory();
    
    const logOut = async ()=>{
        setLogFlag(true);
        dispatch(desLog());
        await app.auth().signOut();
        history.push('/login')
    }
    return(
        <Button type="button" variant='contained' className={classes.btn} onClick={()=>logOut()}>
            Cerrar sesión
        </Button>
    )
}

