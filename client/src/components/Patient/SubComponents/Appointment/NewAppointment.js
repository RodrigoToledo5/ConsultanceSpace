import es from "date-fns/locale/es";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getAppointment, getProfessional } from "../../actions";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import DialogRequestButton from "../../../Templates/DialogRequestButton";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "5%",
    marginTop: "2%",
  },
  titleh4: {
    textAlign: "center",
  },

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
    width: "100px",
  },
  title: {
    top: "10px",
  },
  input: {
    width: "100px",
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
  const [selectedDate, setSelectedDate] = useState(
    new Date().toString().substr(0, 21)
  );
  const [note, setNote] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date.toString().substr(0, 21));
  };
  const handleProfessionalChange = (e) => {
    setProf(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    if (professionalId && selectedDate && note) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    dispatch(getProfessional(pacienteId));
  }, [dispatch, pacienteId]);
  const reLoad = () => {
    dispatch(getAppointment(pacienteId, true));
  };
  const createAppointment = (profesionalId, pacienteId, date, note) => {
    return axios({
      method: "POST",
      url: "http://localhost:3001/cita",
      data: {
        profesionalId: profesionalId,
        pacienteId: pacienteId,
        date: date,
        note: note,
      },
    }).then((res) => (res.status === 200 ? true : false));
  };

  const dateLinda = (date) => {
    let month = new Date(date).getMonth() + 1;
    month = month > 9 ? month.toString() : "0" + month.toString();
    return date.substring(8, 10) + "/" + month + "/" + date.substring(11, 16);
    //cita.date.substring(16,21)
  };

  const agendarButton = () => {
    const dateStr =
      dateLinda(selectedDate) +
      " a las " +
      selectedDate.substring(16, 21) +
      "hs";
    const props = {
      title: "Agendar",
      buttonOk: "Agendar",
      onClick: () => {},
      disabled: handleSubmit(),
      req: () => {
        return createAppointment(
          professionalId,
          pacienteId,
          selectedDate,
          note
        );
      },
      quest: `Desea agendar ${note} con ${
        professionals.profesionals &&
        professionalId &&
        professionals.profesionals.find((p) => p.id === professionalId).fullName
      } para el ${dateStr}`,
      msgOk: "Cita Creada",
      msgFalse: "Error",
      redirect: reLoad,
    };
    return <DialogRequestButton props={props} />;
  };

  return (
    <div>
      <Container className={classes.container}>
        <Typography variant="h5" component="h5" className={classes.titleh4}>
          Agendar una cita
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
          <Grid container justifyContent="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Elegir Fecha"
              format="dd/MMMM/yyyy"
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
              inputProps={{ className: classes.input }}
              label="Motivo"
              value={note}
              onChange={handleNoteChange}
            />
            <TextField
              id="standard-select-currency"
              className={classes.label}
              inputProps={{ className: classes.input }}
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
            {agendarButton()}
          </Grid>
        </MuiPickersUtilsProvider>
      </Container>
    </div>
  );
}
