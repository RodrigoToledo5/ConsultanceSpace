import React from 'react'
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles,Typography} from '@material-ui/core';
const useStyle=makeStyles(theme=>({
    magin:{
        margin: theme.spacing(2),
    },
    menuButton:{
        margin: theme.spacing(1),
        
    },
    fledDirection:{
        flexDirection:'row-reverse',
    },
    bar:{
        background:"white",
        borderRadius:"5px"
    },
    text:{
        color:"#159DE9",
        marginRight:theme.spacing(100),
        marginLeft:theme.spacing(5)
    }

}))

export default function Nav(){
    const classes=useStyle();
    let history = useHistory();

    function handleClick(navlink){
        history.push(navlink)
    }
    return (
        <nav>
            <AppBar className={classes.bar}>  
                <Toolbar className={classes.fledDirection} >
                    <Button type="button" variant='contained' className={classes.menuButton} onClick={()=>handleClick("/login")}>
                        Login
                    </Button>
                    <Button type="button" variant='contained' className={classes.menuButton} onClick={()=>handleClick("/sign-In")}> 
                        Sign-In
                    </Button>
                    <Button type="button" variant='contained' className={classes.menuButton} onClick={()=>handleClick("/home")}>
                        HOME
                    </Button>
                    <Typography variant="h6" color="#159DE9" className={classes.text}>
                         Consultance Space
                    </Typography> 
                </Toolbar> 
            </AppBar>
        </nav>
    )
}