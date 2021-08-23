import {
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useEffect} from "react";
import Appointment from "../SubComponents/Appointment";
import Attention from "../SubComponents/Attention";
import Professionals from "../../Professional/SubComponents/professionals/Professionals";
import Managment from "../SubComponents/Managment";
import Welcome from "../SubComponents/Welcome";

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
    backgroundColor: "rgb(232, 240, 254)",
    padding: "10px",
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    minHeight: "120vh",
    alignContent: "center"
    
  },
  btn: {
    marginTop: "25px",
    marginBottom: "25px",
  },
}));
//Administra el componente a renderizar y muestra los botones y opciones
export default function NavPanel({ updateComponent }) {
  const classes = useStyle();

//Objeto de componentes y nombres
  const routes = [
    { "Buscar profesional": <Professionals/>},
    { "Citas agendadas": <Appointment />  },
    { "Atención": <Attention /> },
    {"Gestion de pagos": <Managment /> },
    
    
  ];
  useEffect(() => {
    updateComponent(<Welcome/>);
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
