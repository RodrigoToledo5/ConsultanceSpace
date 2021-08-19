import {Button,Box} from '@material-ui/core/'
import { makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { blue, red} from '@material-ui/core/colors';
import { useFirebaseApp, useUser } from "reactfire";
import Profile from './Profile';
import { useState } from 'react';
import ButtonLogout from './ButtonLogout';
const useStyle=makeStyles(theme=>({
    btn:{
        margin: theme.spacing(1),
        minWidth:'84px'   
    },
    head:{

        backgroundColor: blue[500],
        margin:"5px"
        
    },
    menu:{
        display:"flex",
        flexDirection:"column",
        position:"fixed",
        right:"0px",
        top:"85px",
        minWidth:"190px",
        maxWidth:"190px",
        padding:"10px",
        marginLeft:"15px",
        marginRight:"15px",
        backgroundColor:"#C4C4C4",
        borderRadius:"10px",
        transitionDuration:"3s"
    
    },
    pick:{
        height:"90px",
        width:"90px",
        borderRadius:"50%"
    },
    text:{
        padding:"1px",
        fontSize:"1.5vh"
    }
}))


export default function ButtonProfileActive({onClick,setLogFlag:setLogFlag}){
    const [editprofile, setEditProfile] = useState(false);
    let history=useHistory();
    const classes=useStyle();
    const user=useUser();
    function handleEdit(){
        setEditProfile(!editprofile)
    } 
    console.log(setLogFlag)
    return(
        <>
           <Button onClick={(event)=>onClick(event)} type="button" variant='contained' className={classes.btn} >
                Perfil
            </Button>
            <Box className={classes.menu}>
                <Button className={classes.head}>
                   <img className={classes.pick} src={user.data.photoURL}></img>
                </Button>
                <Button className={classes.head}>
                    {user.data.displayName}
                </Button>
                <Button className={classes.head}>
                    <div className={classes.text}>
                        {user.data.email}
                    </div>
                </Button>
                
                <Button className={classes.head} onClick={()=>handleEdit()}>
                    {editprofile?"Cerrar":"Editar"}
                </Button>
                {editprofile&&<Profile/>}
                <ButtonLogout setLogFlag={setLogFlag} ></ButtonLogout>
            </Box>
        </>
        
    )
}