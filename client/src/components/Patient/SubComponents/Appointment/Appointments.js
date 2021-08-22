import { useEffect, useState } from "react";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { getAppointment } from "../../actions";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogRequestButton from "../../../Templates/DialogRequestButton";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  text: {
    color: "#159DE9",
  },
  grid: {
    color: "black",
  },
  titleh4:{
    textAlign:"center"
  },
}));

export default function Appointments() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const appointment = useSelector((store) => store.reducerPatient.appointment);
  const user = useSelector((store) => store.reducerLog.info);
  const pacienteId = user.id;
  const get = true;
  const [actCita, setActCita] = useState({
    profesionalFullName:"",
    pacienteFullName: "",
    date: "",
    note: "",
  });
  const renderDeleteButton = (params) => {
    const props = {
      styles: {
        color: "brown",
        borderColor: "brown",
      },
      title: <DeleteIcon />,
      buttonOk: "Eliminar",
      onClick: () => {
        setActCita(appointment.find((a) => (a.id = params.id)));
      },
      req: sendData,
      quest: `Desea eliminar ${actCita.note} con ${actCita.profesionalFullName} agendada para ${actCita.date}`,
      msgOk: "Cita eliminada",
      msgFalse: "Error",
      redirect: reLoad,
    };
    return (
      <strong>
        <DialogRequestButton props={props} />
      </strong>
    );
  };

  useEffect(() => {
    dispatch(getAppointment(pacienteId, get));
  }, [pacienteId, get, dispatch]);

  const reLoad = () => {dispatch(getAppointment(pacienteId, get));}

  const sendData = () => {
    const api = "http://localhost:3001";
    return axios({
      method: "DELETE",
      url: `${api}/cita`,
      data: {
        id: actCita.id,
      },
    }).then((res) => {
      return res.status === 200 ? true : false;
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "date",
      headerName: "Fecha",
      width: 300,
      editable: true,
    },
    {
      field: "note",
      headerName: "Motivo",
      width: 300,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "b3",
      headerName: "Cancelar",
      width: 150,
      renderCell: renderDeleteButton,
      disableClickEventBubbling: true,
    },
  ];
  
  const rows =
    appointment &&
    appointment.map((cita) => {
      return {
        id: cita.id,
        date: cita.date,
        note: cita.note,
        status: cita.status,
      };
    });

  return (
    <>
      <Container>
        <Typography variant="h5" component="h5" className={classes.titleh4}>
          Mis citas
        </Typography>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            className={classes.grid}
            rows={rows}
            columns={columns}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Container>
    </>
  );
}
