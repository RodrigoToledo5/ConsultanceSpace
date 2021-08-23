import { Box, Button, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Appointment from "../SubComponents/Appointment/Appointment";
import Attention from "../SubComponents/Attention";
import Patients from "../SubComponents/Patients/Patients";
import Professionals from "../SubComponents/professionals/Professionals";
import Managment from "../SubComponents/Managment";
import Stock from "../SubComponents/Stock/Stock";
import MyPatients from "../SubComponents/MyPatients/MyPatients";
import NuevaCita from "../SubComponents/Appointment/NuevaCita/NuevaCita";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "../../Log/actions";
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
    paddingLeft: "50px",
    paddingRight: "50px",
    marginLeft: "10px",
    marginRight: "10px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    minHeight: "90vh",
    alignContent: "center",
    justifyContent: "space-evenly"
  },
  btn: {
    marginTop: "-5px",
    marginBottom: "-5px",
  },
}));

//Administra el componente a renderizar y muestra los botones y opciones
export default function NavPanel({ updateComponent }) {
  const classes = useStyle();
  const rerender = useSelector((store) => store.reducerLog.redirect);
  const dispatch = useDispatch();

  //Objeto de componentes y nombres
  const routes = [
    {"Mis Pacientes": <MyPatients />  },
    { "Inventario": <Stock />},
    { "Agendar Cita": <NuevaCita /> },
    {  "Pacientes": <Patients /> },
    { "Citas agendadas": <Appointment withoutTitle={true} /> },
    { "Profesionales": <Professionals />},
    { "Atención": <Attention />},
    {  "Finzanzas": <Managment />},
  ];
  
  const indexPrivateRoutes = 6; // a partir de este indice loa botones se ocultan

  useEffect(() => {
    updateComponent(<Welcome/>);
  }, []);

  useEffect(() => {
    if(Number.isInteger(rerender)){
      const key = Object.keys(routes[rerender])[0];
      updateComponent(routes[rerender][key]);
      dispatch(redirect(null));
    };
  }, [rerender]);

  const update = (r) => {
    updateComponent(r[Object.keys(r)[0]]);
  };
  return (
    <Box className={classes.box}>
      {routes.map((r, i) => (i < indexPrivateRoutes? (
        <Button
          key={i}
          className={classes.btn}
          onClick={() => {
            update(r);
          }}
        >
          {Object.keys(r)[0]}
        </Button>) : "")
      )}
    </Box>
  );
}
