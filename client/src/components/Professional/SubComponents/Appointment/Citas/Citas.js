import {
  Box,
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import CitaCard from "./CitaCard/CitaCard";
import {
  DataGrid,
  GridColDef,
  GridApi,
  GridCellValue,
} from "@material-ui/data-grid";

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
}));

export default function Citas({ citas }) {
  const classes = useStyle();

  //const Data a traer por fetch/redux
  const arrHorarios = ["9:00hs", "10:00hs", "11:00hs"];

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
    console.log(input);
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

  const [rows, setRows] = useState([]);

  const renderCompleteButton = (params) => {
    return (
        <strong>
            <Button
                style={{ marginLeft: 16 }}
                onClick={() => {
                    console.log(params.row.col6)
                }}
            >
                Completar
            </Button>
        </strong>
    )
}

const renderPatientButton = (params) => {
  return (
      <strong>
          <Button
              size="small"
              style={{ marginLeft: 16 }}
              onClick={() => {
                  console.log(params.row.col6)
              }}
          >
              Ficha
          </Button>
      </strong>
  )
}

  const columns = [
    { field: "horario", headerName: "Horario", width: 170 },
    { field: "pacienteName", headerName: "Paciente", width: 170 },
    { field: "note", headerName: "Motivo", width: 170 },
    {
      field: 'b1',
      headerName: 'Ver paciente',
      width: 150,
      renderCell: renderPatientButton,
      disableClickEventBubbling: true,
  },
  {
    field: 'b2',
    headerName: 'Completar cita',
    width: 150,
    renderCell: renderCompleteButton,
    disableClickEventBubbling: true,
},
  ];

  useEffect(() => {
    setRows(
      actCitas.map((c) => {
        console.log(c);
        return {
          id: c.id,
          horario: "" + c.date.substring(12, 16) + "hs",
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
