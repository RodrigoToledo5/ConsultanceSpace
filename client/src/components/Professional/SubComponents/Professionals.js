import { Box, Typography, makeStyles,TextField,FormControl,Button } from "@material-ui/core";
import { useState } from "react";
import devImg from "../../../assets/img/etc/inDev.png"
import { blue, red} from '@material-ui/core/colors';


const useStyle = makeStyles((theme) => ({
    text: {
      color: "#159DE9",
    },
    box: {
      padding: "10px",
      paddingLeft: "50px",
      paddingRight: "50px",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      borderRadius: "10px",
      color: "#159DE9",
    },
    title:{
      color: '#159DE9',
      fontFamily: 'Roboto'
  },
  principal:{
      marginTop: "100px",
      display: "flex",
      justifyContent: "center",

  },
  divStyle:{
      paddingTop: '5%',
      backgroundColor: '#E8EEF4',
      width: "60%",
      borderRadius: "10px",
      marginTop: "85px",
      marginBottom: "5%",
      paddingBottom: '5%',
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent: "center",
      "@media (max-width : 500px)": {
          width: "100%",
        },
  },
  firstGrid:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "@media (max-width : 500px)": {
          marginLeft:"8%",
        },

  },
  textField: {
      width: '100%',
      main: blue[500],
  },
  formAdress:{
      marginLeft: "10px",
      "@media (max-width : 500px)": {
          marginLeft: "0",
        },
  },
  labelTextField:{
      color: "#2196f3 !important",
  },
  formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
  },
  selectEmpty:{
      width: "230px",
      main: "#2196f3 !important",
  },
  alert:{
      display:"flex",
      direction:"row",
      justifyContent:"center",
      textAlign:"center"
  },
  slider:{
      color: "#2196f3",
      width:"90%",
  },
  boxSlider:{
      width:"60%",
      marginLeft:"20%",
      display:'flex',
      flexDirection:'column',
      alignItems: "center",
      minWidth: "200px",
      '@media (max-width : 500px)':{
          width:"100%",
          marginLeft:"0",
          
      }
  },
  boxSliderText:{
      width:"100%",
      display:'flex',
      justifyContent: "space-between",
      '@media (max-width : 500px)':{
          width:"50%",
      }
  },
  fontNormal:{
      fontSize:"20px",
      '@media (max-width : 500px)':{
          fontSize:"15px",
      }
  },
  fontSelect:{
      fontSize:"20px",
      color:"#2196f3",
      '@media (max-width : 500px)':{
          fontSize:"15px",
      }
  },
  container:{
      margin:"10px",
      display:"flex",
      flexDirection:"row",
      alignContent:"center",
      alignItems: "flex-start"
  }
  }));

  
export default function Professionals(){
    const classes = useStyle();
    const [input, setInput] = useState("")
    function handleInput(){

    }
    return(
        <Box className={classes.box}>
            <Typography variant='h4' color='blue'>Professionals</Typography>
            <FormControl className={classes.container}>
              <TextField 
                label="Nombre"
                id="name"
                className={ classes.textField}
                variant="outlined"
                InputProps={classes.labelTextField}
                name="input"
                value={input}
                autoComplete="off">
              </TextField>
              <Button type="submit" variant="contained" color='secondary'>
                Buscar
              </Button> 
            </FormControl>
            <Box>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Box>
        </Box>
    )
}