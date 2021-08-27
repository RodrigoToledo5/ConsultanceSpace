import {
  Box,
  Typography,
  makeStyles,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCita } from "../../../../Log/actions";
import Treatments from "../../Treatments/Treatments";

const useStyle = makeStyles((theme) => ({
  text: {
    color: "#159DE9",
    marginLeft: "8vh",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    color: "#159DE9",
  },
  textField: {
    margin: "10px",
  },
}));

export default function FinalDate() {
  const api = "http://localhost:3001";
  const classes = useStyle();
  const user = useSelector((store) => store.reducerLog.info);
  const cita = useSelector((store) => store.reducerLog.actCita);
  const [status, setStatus] = useState(cita.status);
  const [citas, setCitas] = useState([]);
  const dispatch = useDispatch();
  // const loadData = async () => {
  //   axios({
  //     method: 'POST',
  //     url: `${api}/cita`,
  //     data: { profesionalId:user.id ,get: true}
  // }).then((res)=>{
  //     setCitas(res.data);})}

  // useEffect(()=>{loadData()},[]);

  const handleSubmit = () => {
      axios({
        method: "PUT",
        url: `${api}/cita`,
        data: { id: cita.id, status: status },
      }).then((res) => {
        dispatch(setCita(res.data));
      });
    };


  const arrDisableTextField = [
    { textName: "Dia", prop: cita.date.substring(0, 10) },
    { textName: "Paciente", prop: cita.pacienteFullName },
    { textName: "Horario", prop: cita.date.substring(11, 24) },
    { textName: "Motivo", prop: cita.note },
  ];

  const DisableTextField = (textName, prop, i) => (
    <TextField
      key={i}
      label={textName}
      className={classes.textField}
      variant="outlined"
      InputProps={{ className: classes.labelTextField }}
      name="name"
      value={prop}
      autoComplete="off"
      disabled={true}
    />
  );

  return (
    <Box className={classes.box}>
      {arrDisableTextField.map((obj, i) =>
        DisableTextField(obj.textName, obj.prop, i)
      )}
      <TextField
        label="Estado"
        className={classes.textField}
        variant="outlined"
        InputProps={{ className: classes.labelTextField }}
        name="name"
        select
        value={status}
        autoComplete="off"
        disabled={cita.status}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <MenuItem value={"AUSENTE"}>AUSENTE</MenuItem>
        <MenuItem value={"ASISTIO"}>ASISTIO</MenuItem>
        <MenuItem value={"CANCELADA"}>CANCELADA</MenuItem>
      </TextField>
      <Treatments citumId={cita.id} />
      <Button onClick={handleSubmit}>COMPLETAR</Button>
    </Box>
  );
}
