import { Box, Typography, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    text: {
      color: "#159DE9",
    },
    box: {
      padding: "10px",
      paddingLeft: "50px",
      paddingRight: "50px",
      marginLeft: "10px",
      marginRight: "10px",
      marginBottom: "10px",
      display: "flex",
      flexDirection: "column",
      borderRadius: "10px",
      color: "#159DE9",
    },
    paper:{
      color: "white",
      padding: "10px",
      width: "300px",
      height: "300px",
    },
    mainContainer:{
      display:"flex",
      flexDirection:"column",
    }
  }));

export default function CitaCard({cita}){
    const classes = useStyle();
    return(
        <Box className = {classes.box}>
          <Paper className = {classes.paper}>
          <Box className = {classes.mainContainer}>
            {cita.pacienteFullName}
            {cita.date}
          </Box>
          </Paper>
        </Box>
    )
}