import { Box, Button, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "../../../Log/actions";
import Payout from "./Payout/Payout";

const useStyle = makeStyles((theme) => ({}));

//Administra el componente a renderizar y muestra los botones y opciones
export default function Subscripcion({
  updateComponent,
  showMenu,
  setShowMenu,
}) {
  const classes = useStyle();
  const rerender = useSelector((store) => store.reducerLog.redirect);
  const dispatch = useDispatch();
  const info = useSelector((store) => store.reducerLog.info);
  const [death, setDeath] = useState(false);

  const subVencida = (match) => { // devuelve true si vencio la suscripcion
    const day = match.substring(0,2);
    const month = match.substring(3,5);
    const year = match.substring(6,10);
    const dates = new Date (month + "/" +  day  + "/" +  year);
    dates.setHours(0,0,0,0);
    const today = new Date;
    today.setHours(0,0,0,0);
    return dates < today

  }

  useEffect(() => {
    if(info.subscripcion){
      setDeath(subVencida(info.subscripcion));
    }
  }, [info]);


  return <Box>{
    death? ` Su subscripcion ha terminado el ${info.subscripcion}` :
    ` Su subscripcion termina el ${info.subscripcion}`}
    <Payout />
    </Box>;
}
