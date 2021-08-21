import {
  Box,
  Typography,
  makeStyles,
  TextField,
  FormControl,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardTimePicker,
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Appointment from "../Appointment";
import { redirect } from "../../../../Log/actions";

const useStyle = makeStyles((theme) => ({
  text: {
    color: "#159DE9",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    color: "#159DE9",
    marginLeft: "50px",
  },
  componentContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "200px",
    paddingTop: "20px",
  },
  appDate: {
    display: "flex",
  },
  app: {
    width: "1000px",
  },
  labelTextField: {
    margin: "10px",
  },
  button: {
    marginTop: "10px",
  },
}));

export default function NuevaCita({ patient }) {
  const api = "http://localhost:3001";
  const classes = useStyle();
  const user = useSelector((store) => store.reducerLog.info);
  const [date, setDate] = useState(new Date());
  const [motivo, setMotivo] = useState("Consulta");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [finalMsg, setFinalMsg] = useState("");
 const dispatch = useDispatch();

  const sendData = () => {
    setOpen(false);
    setLoading(true);
    axios({
      method: "POST",
      url: `${api}/cita`,
      data: {
        profesionalId: user.id,
        pacienteId: patient.id,
        date: date,
        note: motivo,
      },
    }).then((res) => {
      setFinalMsg( res.status === 200? "Cita creada" : "" );
    });
  };

  //   useEffect(() => {
  //     loadData();
  //   }, []);

  const handleMotivo = (e) => {
    if (e.target.value.length < 10) setMotivo(e.target.value);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleHourChange = (time) => {
    const hoursAndMins = time.toLocaleString().substring(10, 15);
    setDate({ ...date, hour: time });
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box className={classes.box}>
        <Typography variant="h4">Nueva Cita</Typography>
        <Box className={classes.appDate}>
          <Box className={classes.componentContainer}>
            <FormControl className={classes.form}>
              <TextField
                label="Paciente"
                id="name"
                className={classes.textField}
                variant="outlined"
                InputProps={{ className: classes.labelTextField }}
                name="name"
                onChange={(event) => {}}
                value={patient.fullName}
                autoComplete="off"
                disabled={true}
              />
              <TextField
                label="Motivo"
                id="name"
                className={classes.textField}
                variant="outlined"
                InputProps={{ className: classes.labelTextField }}
                name="name"
                onChange={(e) => {
                  handleMotivo(e);
                }}
                value={motivo}
                autoComplete="off"
              />
            </FormControl>
            <KeyboardDatePicker
              name="date"
              margin="normal"
              id="date-picker-dialog"
              label="Dia"
              format="MM/dd/yyyy"
              value={date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardTimePicker
              name="hour"
              margin="normal"
              id="time-picker"
              label="Horario"
              value={date}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
            <Button onClick={handleSubmit} className={classes.button}>
              {" "}
              Crear cita
            </Button>
          </Box>
          <Box className={classes.app}>
            <Appointment withoutTitle={true} />
          </Box>
        </Box>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{`Desea crear cita con ${patient.fullName} el ${date}`}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              texto p editar
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              color="primary"
            >
              Cancelar
            </Button>
            <Button onClick={sendData} color="primary" autoFocus>
              Crear
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={finalMsg.length > 0}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{`${finalMsg}`}</DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                dispatch(redirect(0));
                setFinalMsg("");
              }}
              color="primary"
            >
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </MuiPickersUtilsProvider>
  );
}