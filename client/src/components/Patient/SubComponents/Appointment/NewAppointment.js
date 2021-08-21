import "date-fns";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getProfessional } from "../../actions";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Button, Container, makeStyles } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  label: {
    display: "inline-flex",
    padding: "0",
    position: "relative",
    minWidth: "0",
    verticalAlign: "top",
    flexDirection: "row",
    marginBottom: "8px",
  },
  title: {
    top: "10px",
  },
}));

export default function NewAppointment() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const professionals = useSelector(
    (store) => store.reducerPatient.professionals
  );
  const user = useSelector((store) => store.reducerLog.info);
  const pacienteId = user.id;
  const [professionalId, setProf] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [note, setNote] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleProfessionalChange = (e) => {
    setProf(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    if (professionalId && selectedDate && note) {
      createAppointment(professionalId, pacienteId, selectedDate, note);
    }
  };
  useEffect(() => {
    dispatch(getProfessional(pacienteId));
  }, [dispatch, pacienteId]);

  const createAppointment = (profesionalId, pacienteId, date, note) => {
    axios({
      method: "POST",
      url: "http://localhost:3001/cita",
      data: {
        profesionalId,
        pacienteId,
        date,
        note,
      },
    });
  };

  return (
    <div>
      <Container>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justifyContent="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Elegir Fecha"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Elegir Horario"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
            <TextField
              id="standard-basic"
              className={classes.label}
              label="Motivo"
              value={note}
              onChange={handleNoteChange}
            />
            <TextField
              id="standard-select-currency"
              className={classes.label}
              select
              label="Médico"
              value={professionalId}
              onChange={handleProfessionalChange}
            >
              {professionals.profesionals &&
                professionals.profesionals.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.fullName}
                  </MenuItem>
                ))}
            </TextField>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleSubmit}
              startIcon={<EventAvailableIcon />}
            >
              Agendar
            </Button>
          </Grid>
        </MuiPickersUtilsProvider>
      </Container>
    </div>
  );
}
