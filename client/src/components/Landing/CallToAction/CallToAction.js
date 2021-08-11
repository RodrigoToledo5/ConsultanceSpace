// CallToAction export default, height can be passed by params, text
// is not responsive

import { Box, Button, Paper, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import CalendarIcon from "@material-ui/icons/CalendarToday";

export default function CallToAction({ height }) {
  const itemHeight = height ? height : "400px";
  const styles = {
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
  };

  let history = useHistory();

  function handleClick(navlink) {
    history.push(navlink);
  }

  return (
    <Box>
      <Paper elevation={3} style={styles.paperContainer}>
        <Typography variant="h4">Somos ConsultanceSpace!</Typography>
        <Typography variant="body1">
          <p>
            Una plataforma de reseva y gestion de turnos, pagos y stock que te
            va a sorprender. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vivamus ut convallis justo.{" "}
          </p>
        </Typography>
        <Grid container style={styles.grid}>
          <Button
            color="primary"
            style={styles.button}
            startIcon={<CalendarIcon />}
            onClick={() => {
              handleClick("/sign-in");
            }}
          >
            Reserva ya
          </Button>
        </Grid>
      </Paper>
    </Box>
  );
}
