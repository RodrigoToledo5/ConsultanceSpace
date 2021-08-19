import { Box, Button, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Appointment from "../SubComponents/Appointment/Appointment";
import Attention from "../SubComponents/Attention";
import Patients from "../SubComponents/Patients/Patients";
import Professionals from "../SubComponents/Professionals";
import Managment from "../SubComponents/Managment";
import Stock from "../SubComponents/Stock/Stock";
const useStyle = makeStyles((theme) => ({
  magin: {
    margin: theme.spacing(2),
  },
  menuButton: {
    margin: theme.spacing(1),
    minWidth: "84px",
  },
  bar: {
    background: "white",
    borderRadius: "5px",
  },
  toolbar: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      flexDirection: "column-reverse",
    },
  },
  text: {
    color: "#159DE9",
  },
  nav: {
    display: "flex",
  },
  box: {
    backgroundColor: "#C4C4C4",
    padding: "10px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    maxHeight: "335px",
  },
  btn: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

//Administra el componente a renderizar y muestra los botones y opciones
export default function NavPanel({ updateComponent }) {
  const classes = useStyle();

  //Objeto de componentes y nombres
  const routes = [
    { Appointment: <Appointment /> },
    { Managment: <Managment /> },
    { Patients: <Patients /> },
    { Attention: <Attention /> },
    { Stock: <Stock /> },
    { Professionals: <Professionals /> },
  ];
  
  useEffect(() => {
    updateComponent(routes[0].Inicio);
  }, []);
  const update = (r) => {
    updateComponent(r[Object.keys(r)[0]]);
  };
  return (
    <Box className={classes.box}>
      {routes.map((r, i) => (
        <Button
          key={i}
          className={classes.btn}
          onClick={() => {
            update(r);
          }}
        >
          {Object.keys(r)[0]}
        </Button>
      ))}
    </Box>
  );
}
