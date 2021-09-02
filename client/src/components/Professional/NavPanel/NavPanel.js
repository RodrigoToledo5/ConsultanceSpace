import { Box, Button, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import Appointment from "../SubComponents/Appointment/Appointment";
//import Attention from "../SubComponents/Attention";
import Patients from "../SubComponents/Patients/Patients";
import Professionals from "../SubComponents/professionals/Professionals";
import Managment from "../SubComponents/Managment";
import Stock from "../SubComponents/Stock/Stock";
import MyPatients from "../SubComponents/MyPatients/MyPatients";
import NuevaCita from "../SubComponents/Appointment/NuevaCita/NuevaCita";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "../../Log/actions";
import Welcome from "../SubComponents/Welcome";
import SetHorario from "../SubComponents/SetHorarios/SetHorarios";
import Treatments from "../SubComponents/Treatments/Treatments";
import FinalDate from "../SubComponents/Appointment/FinalCita/FinalCita";
import HistoriaClinica from "../SubComponents/HistoriaClinica/HistoriaClinica";
import Subscripcion from "../SubComponents/Subscripcion/Subscripcion";
import Configuracion from "../SubComponents/ConfiguracionDePagos/Configuracion";


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
  boxActive: {
    backgroundColor: "rgb(232, 240, 254)",
    padding: "10px",
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginRight: "10px",
    marginBottom: "10px",
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    borderRadius: '10px',
    minHeight: "90vh",
    alignContent: "center",
    justifyContent: "space-evenly",
    "@media (max-width:900px)": {
      borderTopLeftRadius: '0px',
      paddingLeft: "20px",
      paddingRight: "20px",
      borderTopRightRadius: '10px',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      position: 'absolute',
      left: '8px',
      zIndex: '2',
      transition: '1s ease all'
    },
  },
  box: {
    backgroundColor: "rgb(232, 240, 254)",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginRight: "10px",
    marginBottom: "10px",
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    borderRadius: '10px',
    minHeight: "90vh",
    maxHeight: "90vh",
    alignContent: "center",
    justifyContent: "space-evenly",
    "@media (max-width:900px)": {
      paddingLeft: "20px",
      paddingRight: "20px",
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '10px',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      position: 'absolute',
      zIndex: '2',
      left: '-340px',
      transition: '1s ease all'
    },

  },
  btn: {
    marginTop: "-5px",
    marginBottom: "-5px",
    "@media (max-width:300px)":{
      paddingLeft: '5px',
      paddingRight: '5px'
    }
  },
}));

//Administra el componente a renderizar y muestra los botones y opciones
export default function NavPanel({ updateComponent, showMenu, setShowMenu }) {
  const classes = useStyle();
  const rerender = useSelector((store) => store.reducerLog.redirect);
  const info = useSelector((store) => store.reducerLog.info);
  const dispatch = useDispatch();
  const [bloqueo, setBloqueo] = useState(false)

  //Objeto de componentes y nombres
  const routes = [
    { "Mis Pacientes": <MyPatients />  },
    { "Pacientes": <Patients /> },
    { "Citas agendadas": <Appointment withoutTitle={false} /> },
    { "Inventario": <Stock />},
    { "Profesionales": <Professionals />},
    { "Set Horarios": <SetHorario />},
    { "Ingresos": <Managment/> },
    {"Subscripcion" : <Subscripcion />},
    {"Configuracion":<Configuracion/>},
    /* Rutas ocultas */
    { "Agendar Cita": <NuevaCita /> },
    {"Treatments": <Treatments/>},
    {"Historia Clinica":<HistoriaClinica/>},
    {"FinalDate" : <FinalDate />},
  ];

  const indexPrivateRoutes = 9; //partir de este indice loa botones se ocultan


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

  const subVencida = (match) => { // devuelve true si vencio la suscripcion
    const day = match.substring(0,2);
    const month = match.substring(3,5);
    const year = match.substring(6,10);
    const dates = new Date (month + "/" +  day  + "/" +  year);
    dates.setHours(0,0,0,0);
    const today = new Date();
    today.setHours(0,0,0,0);
    return dates < today

  }

  useEffect(() => {
    if(info.subscripcion){
      if(subVencida(info.subscripcion)){
        dispatch(redirect(12));
        setBloqueo(true);
      }
    }
  }, [info]);

  const update = async(r) => {
    await updateComponent(r[Object.keys(r)[0]]);
    setShowMenu(false)
  };
  return (
    <Box className={showMenu ? classes.boxActive : classes.box }>
      {routes.map((r, i) => (i < indexPrivateRoutes? (
        <Button
          key={i}
          className={classes.btn}
          onClick={() => {
            bloqueo || update(r);
          }}
        >
          {Object.keys(r)[0]}
        </Button>) : "")
      )}
    </Box>
  );
}
