import {Button,Box} from '@material-ui/core/'
import { makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { blue, red} from '@material-ui/core/colors';
import {useUser } from "reactfire";
import Profile from './Profile';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ButtonLogout from './ButtonLogout';
import { getInfo } from '../../Log/actions';
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
        backgroundColor:"rgb(232, 240, 254)",
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


export default function ButtonProfileActive({onClick,setLogFlag:setLogFlag,setProfile:setProfile}){
    const [editprofile, setEditProfile] = useState(false);
    const profile = useSelector(state => state.reducerLog.user)
    const info=useSelector(state => state.reducerLog.info)
    const classes=useStyle();
    const dispatch = useDispatch()
    const user=useUser();
    function handleEdit(){
        setEditProfile(!editprofile)
    }
    useEffect(()=>{
        dispatch(getInfo({...profile}));
    },[])
    
    return(
        <>
           <Button onClick={(event)=>onClick(event)} type="button" variant='contained' className={classes.btn} >
                Perfil
            </Button>
            <Box className={classes.menu}>
                <Button className={classes.head}>
                   <img className={classes.pick} src={user.data&&user.data.photoURL}></img>
                </Button>
                <Button className={classes.head}>
                    {info&&info.fullName}
                </Button>
                <Button className={classes.head}>
                    <div className={classes.text}>
                        {user.data&&user.data.email}
                    </div>
                </Button>
                
                <Button className={classes.head} onClick={()=>handleEdit()}>
                    {editprofile?"Cerrar":"Editar"}
                </Button>
                {editprofile&&<Profile/>}
                <ButtonLogout setLogFlag={setLogFlag} setProfile={setProfile} ></ButtonLogout>
            </Box>
        </>
        
    )
}