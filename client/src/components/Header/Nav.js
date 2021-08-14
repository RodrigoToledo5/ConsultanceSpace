import React from 'react'
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles,Typography,Box} from '@material-ui/core';
const useStyle=makeStyles(theme=>({
    magin:{
        margin: theme.spacing(2),
    },
    menuButton:{
        margin: theme.spacing(1),
        minWidth:'84px'
        
    },
    bar:{
        background:"white",
        borderRadius:"5px"
    },
    toolbar:{
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        '@media (max-width:600px)':{
            flexDirection:'column-reverse'
        }
       
    },
    text:{
        color:"#159DE9",
    },
    nav:{
        display:'flex'
    },
    box:{
        display:'flex',
        flexDirection:'row'
        
    }

}))

export default function Nav(){
    const classes=useStyle();
    let history = useHistory();

    function handleClick(navlink){
        history.push(navlink)
    }
    return (
        <nav className={classes.nav}>
            <AppBar className={classes.bar}>  
                <Toolbar className={classes.toolbar} >
                    <Box className={classes.box}>
                        <Button type="button" variant='contained' className={classes.menuButton} onClick={()=>handleClick("/login")}>
                            Login
                        </Button>
                        <Button type="button" variant='contained' className={classes.menuButton} onClick={()=>handleClick("/sign-In")}> 
                            Sign-In
                        </Button>
                        <Button type="button" variant='contained' className={classes.menuButton} onClick={()=>handleClick("/")}>
                            HOME
                        </Button>
                    </Box>
                    <Typography className={classes.text} variant="h6">
                        Consultance Space
                    </Typography> 
                </Toolbar> 
            </AppBar>
        </nav>
    )
}