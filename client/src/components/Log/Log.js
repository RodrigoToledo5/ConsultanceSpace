
import React,{useState} from 'react'
//import {auth, db} from '../../firebase.js'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {makeStyles, Button, Box,TextField} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';

const useStyle = makeStyles(theme =>({
    form:{
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',

    },
    container:{
        marginBottom: '20px',
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background:'#E8EEF4',
        borderRadius: '10px',
        paddingBottom: '20px',
        '@media (max-width : 900px)':{
            width: '70%'
        },
        '@media (max-width : 500px)':{
            width: '100%'
        }

    },
    items:{
        display: 'flex',
        justifyContent: 'center',
        width: '70%'
    },
    btn:{
        marginTop: '10px',
        width: '100%',
        backgroundColor: '#1F6186',
        color: 'white',
        fontFamily: 'Roboto'
    },
    text:{
        color: '#159DE9',
        fontFamily: 'Roboto'
    },
    textfield:{
        width: '100%'
    },
    input:{
        color: '#159DE9',
        width: '100%'  
    },
    title:{
        color: '#159DE9',
        fontFamily: 'Roboto'
    },
    hr:{
        width: '100%'
    },
    relative:{
        position: 'absolute',
        backgroundColor: '#E8EEF4',
        top: '-20px',
        right: '47%',
        padding: '10px',
        fontFamily: 'Roboto',
    },
    position:{
        position: 'relative'
    },  
    span:{
        marginRight: '10px'
    },
    btnfacebook:{
        marginTop: '10px',
        width: '100%',
        backgroundColor: '#1F6186',
        color: 'white',
        fontFamily: 'Roboto'
    },
    btngoogle:{
        marginTop: '10px',
        width: '100%',
        backgroundColor: '#D93025',
        color: 'white',
        fontFamily: 'Roboto'
    }
}))





const Login = (props) => {
    const [input, setInput] = useState({
        email:'',
        password:''
    })
    // const [email, setEmail] = React.useState('')
    // const [pass, setPass] = React.useState('')
    // const [error, setError] = React.useState(null)

    // const [esRegistro, setEsRegistro] = React.useState(false)

    // const procesarDatos = e => {
    //     e.preventDefault()
    //     if(!email.trim() || !pass.trim()){
    //         console.log('Datos vacíos email!')
    //         setError('Datos vacíos email!')
    //         return
    //     }
    //     if(!pass.trim()){
    //         console.log('Datos vacíos pass!')
    //         setError('Datos vacíos pass!')
    //         return
    //     }
    //     if(pass.length < 6){
    //         console.log('6 o más carácteres')
    //         setError('6 o más carácteres en pass')
    //         return
    //     }
    //     console.log('correcto...')
    //     setError(null)

    //     if(esRegistro){
    //         registrar()
    //     }else{
    //         login()
    //     }

    // }

    // const login = React.useCallback(async () => {
    //     try {
    //         const res = await auth.signInWithEmailAndPassword(email, pass)
    //         console.log('El res es ', res)
    //         //console.log(res.user)
    //         setEmail('')
    //         setPass('')
    //         setError(null)
    //         props.history.push('/admin')
    //     } catch (error) {
    //         console.log('el error es',error)
    //         if(error.code === 'auth/invalid-email'){
    //             setError('Email no válido')
    //         }
    //         if(error.code === 'auth/user-not-found'){
    //             setError('Email no registrado')
    //         }
    //         if(error.code === 'auth/wrong-password'){
    //             setError('Contraseña incorrecta')
    //         }
    //     }
    // }, [email, pass, props.history])

    // const registrar = React.useCallback(async() => {

    //     try {
    //         const res = await auth.createUserWithEmailAndPassword(email, pass)
    //         console.log(res.user)
    //         await db.collection('usuarios').doc(res.user.email).set({
    //             email: res.user.email,
    //             uid: res.user.uid
    //         })
    //         await db.collection(res.user.uid).add({
    //             name: 'Tarea de ejemplo',
    //             fecha: Date.now()
    //         })
    //         setEmail('')
    //         setPass('')
    //         setError(null)
    //         props.history.push('/admin')
    //     } catch (error) {
    //         console.log(error)
    //         if(error.code === 'auth/invalid-email'){
    //             setError('Email no válido')
    //         }
    //         if(error.code === 'auth/email-already-in-use'){
    //             setError('Email ya utilizado')
    //         }
    //     }

    // }, [email, pass, props.history])
    const handleInput = (event)=>{
        setInput({
            ...input,
            [event.target.name]:event.target.value
        })
    }
    const classes = useStyle();
    return (
        <form className={classes.form}>
            <Box className={classes.container}>
                <Box className={classes.items}>
                    <h2 className={classes.title}>
                        Log In
                    </h2>
                </Box>
                <Box className={classes.items}>
                    <TextField
                        className={classes.textfield}
                        type="email"
                        label="email"
                        variant="outlined"
                        color= "secondary"
                        name= "email"
                        InputProps={{
                            className: classes.input
                        }}
                        value= {input.email}
                        onChange={handleInput}
                    />
                </Box>
                <Box mt={2} className={classes.items}>
                    <TextField
                        className={classes.textfield}
                        type="password"
                        label="password"
                        variant="outlined"
                        color="secondary"
                        name= "password"
                        InputProps={{
                            className: classes.input
                        }}
                        onChange={  handleInput}
                        value={input.password}
                    />
                </Box>
                <Box className={classes.items}>
                    <Button variant="contained" color="primary" className={classes.btn} >
                        Login
                    </Button>
                </Box>
                <Box className={classes.hr} pt={2}>
                    <Box className={classes.position}>
                        <hr/>
                        <Box className={classes.relative}>
                            or
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.items}>
                    <Button variant="contained" color="primary" startIcon={<GTranslateIcon/>} className={classes.btngoogle} >
                        Login with Google
                    </Button>
                </Box>
                <Box className={classes.items}>
                    <Button variant="contained" color="primary" startIcon={<FacebookIcon/>} className={classes.btnfacebook} >
                        Login with Facebook
                    </Button>
                </Box>           
                <Box 
                    pt={1} 
                    fontFamily='Roboto'
                    className={classes.items}>
                    <span className={classes.span}>
                        Do not have an account?  
                    </span>
                    <Link to='/sign-in'>Sign up</Link>  
                </Box>
            </Box>
        </form>
    )
}

export default withRouter(Login)