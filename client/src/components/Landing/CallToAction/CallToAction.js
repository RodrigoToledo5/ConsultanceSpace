// CallToAction export default, height can be passed by params, text
// is not responsive

import { Box, Button, Paper, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import {useHistory } from "react-router-dom";
import CalendarIcon from "@material-ui/icons/CalendarToday";



export default function CallToAction({ height }) {
  const itemHeight = height ? height : "400px";

  const useStyle = makeStyles(theme=>( {
    paperContainer: {
      height: itemHeight,
      padding: "5% 5%",
      display: "flex",
      flexDirection: "column",
    },
    grid: {
      height: "100%",
      justifyContent: "flex-end",
      alignContent: "flex-end",
    },
    button: {
      width: "200px",
    },
    text:{
      fontSize:'1rem',
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      },
      // [theme.breakpoints.up('md')]: {
      //   fontSize: '2.4rem',
      // },
    },
    container:{
      flexDirection:"row",
    }
  }));

  let history = useHistory();

  function handleClick(navlink) {
    history.push(navlink);
  }
  const classes=useStyle();
  return (
    <>
      <Paper elevation={3} className={classes.paperContainer}>
        <Typography variant="h4">Somos ConsultanceSpace!</Typography>
        <Typography variant="body1" className={classes.text}>
            Una plataforma de reserva y gestión de turnos, pagos y stock que te
            va a sorprender. 
            Facilitamos tu gestión, de tiempos, documentos, y pagos.
            Pensada tanto para los profesionales de la salud como para los mismos pacientes.
{" "}
        </Typography>
        <Grid container className={classes.grid}>
          <Button
            color="primary"
            className={classes.button}
            startIcon={<CalendarIcon />}
            onClick={() => {
              handleClick("/sign-in");
            }}
          >
            Reserva ya
          </Button>
        </Grid>
      </Paper>
    </>
  );
}
