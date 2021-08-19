import { Box, Typography, makeStyles } from "@material-ui/core";

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
  }));

export default function CitaCard(){
    const classes = useStyle();
    return(
        <Box className={classes.box}>
            <Typography variant='body1' color='blue'>Cita Card</Typography>
        </Box>
    )
}