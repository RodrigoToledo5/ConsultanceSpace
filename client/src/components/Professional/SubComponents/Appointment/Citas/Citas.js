import {
  Box,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import DialogRequestButton from "../../../../Templates/DialogRequestButton";

const useStyle = makeStyles((theme) => ({
  text: {
    color: "#159DE9",
  },
  box: {
    padding: "10px",
    paddingLeft: "50px",
    paddingRight: "50px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    color: "#159DE9",
  },
  button: {
    color: "brown",
    borderColor: "brown",
  },
}));

export default function Citas({ citas, reLoad }) {
  const classes = useStyle();
  const api = "http://localhost:3001";

  // si generar un date limpio es este quilombo
  const dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  if (month < 10) month = "0" + month;
  let day = dateObj.getUTCDate();
  if (day < 10) day = "0" + day;
  const year = dateObj.getUTCFullYear();
  const newdate = year + "-" + month + "-" + day;
  // fin de la generacion de date

  const [actCitas, setActCitas] = useState(citas);
  const [input, setInput] = useState({ date: newdate });
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // citas date format 2021-08-19T02:03:30.142Z
    const day = parseInt(input.date.substring(8, 10), 10);
    const arr = citas.filter(
      (c) => parseInt(c.date.substring(8, 10), 10) === day
    );
    setActCitas([...arr]);
  }, [input.date, citas]);
  const [actCita, setActCita] = useState({
    pacienteFullName: "",
    date: "",
    note: "",
  });
  const [rows, setRows] = useState([]);

  const renderCompleteButton = (params) => {
    return (
      <strong>
        <Button
          style={{ marginLeft: 16 }}
          onClick={() => {
            console.log(params.row.col6);
          }}
        >
          Completar
        </Button>
      </strong>
    );
  };

  const renderPatientButton = (params) => {
    return (
      <strong>
        <Button
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            console.log(params.row.col6);
          }}
        >
          Ficha
        </Button>
      </strong>
    );
  };

  const dateLinda = (date) => {
    let month = (new Date(date)).getMonth() + 1;
    month = month > 9? month.toString() : "0" + month.toString();
    return date.substring(8,10) + "/" + month + "/" + date.substring(11,16);
    //cita.date.substring(16,21)
  }

  const renderDeleteButton = (params) => {
    const dateStr = dateLinda(actCita.date) + " a las " + actCita.date.substring(16,21) + "hs";
    const props = {
      styles: {
        color: "brown",
        borderColor: "brown",
      },
      title: <DeleteIcon />,
      buttonOk: "Eliminar",
      onClick: () => {
        setActCita(actCitas.find((c) => (c.id = params.id)));
      },
      req: sendData,
      quest: `Desea eliminar ${actCita.note} con ${actCita.pacienteFullName} agendada para el ${dateStr}`,
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

  const columns = [
    { field: "horario", headerName: "Horario", width: 170 },
    { field: "pacienteName", headerName: "Paciente", width: 170 },
    { field: "note", headerName: "Motivo", width: 170 },
    {
      field: "b1",
      headerName: "Ver paciente",
      width: 150,
      renderCell: renderPatientButton,
      disableClickEventBubbling: true,
    },
    {
      field: "b2",
      headerName: "Completar cita",
      width: 150,
      renderCell: renderCompleteButton,
      disableClickEventBubbling: true,
    },
    {
      field: "b3",
      headerName: "Eliminar",
      width: 150,
      renderCell: renderDeleteButton,
      disableClickEventBubbling: true,
    },
  ];

  const sendData = () => {
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

  useEffect(() => {
    setRows(
      actCitas.map((c) => {
        const newDate = c.date.includes("T")? c.date.substring(11, 16) :  c.date.substring(16, 21);
        return {
          id: c.id,
          horario: newDate + "hs",
          pacienteName: c.pacienteFullName,
          note: c.note,
        };
      })
    );
  }, [actCitas]);
  return (
    <Box className={classes.box}>
      <Box>Dia</Box>
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          name="date"
          type="date"
          defaultValue={newdate}
          className={classes.textField}
          onChange={(e) => {
            handleInput(e);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Box>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            className={classes.grid}
            rows={rows}
            columns={columns}
            pageSize={20}
            disableSelectionOnClick
          />
        </div>
      </Box>
    </Box>
  );
}
