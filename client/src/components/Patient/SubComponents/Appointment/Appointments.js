import { useEffect } from "react";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { getAppointment } from "../../actions";

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
  console.log("paciente id", pacienteId, get);

  useEffect(() => {
    dispatch(getAppointment(pacienteId, get));
  }, [pacienteId, get, dispatch]);

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
