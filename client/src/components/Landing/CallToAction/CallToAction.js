import { Box, Button, Paper, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <Box>
      <Paper elevation={3} style={styles.paperContainer}>
        <Typography variant="h4">Somos ConsultanceSpace!</Typography>
        <Typography variant="body1">
          <p>Una plataforma de reseva y gestion de turnos, pagos y stock que te va
          a sorprender.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut convallis justo. </p>
        </Typography>
        <Grid container style={styles.grid}>
          <Link to="/register">
            <Button style={styles.button} startIcon={<CalendarIcon />}>
              Reserva ya
            </Button>
          </Link>
        </Grid>
      </Paper>
    </Box>
  );
}
