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
    maxHeight: "280px",
  },
  btn: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

//Administra el componente a renderizar y muestra los botones y opciones
export default function NavPanel({ updateComponent }) {
  const classes = useStyle();
  const rerender = useSelector((store) => store.reducerLog.redirect);
  const dispatch = useDispatch();

  //Objeto de componentes y nombres
  const routes = [
    { Appointment: <Appointment withoutTitle={false} /> },
    { Managment: <Managment /> },
    { Patients: <Patients /> },
    { Mis_Pacientes: <MyPatients /> },
    { Attention: <Attention /> },
    { Stock: <Stock /> },
    { Professionals: <Professionals /> },
    { NuevaCita: <NuevaCita /> },
  ];
  
  const indexPrivateRoutes = 5; // a partir de este indice loa botones se ocultan

  useEffect(() => {
    updateComponent(routes[0].Inicio);
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
