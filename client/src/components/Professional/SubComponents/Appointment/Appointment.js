import { Box, Typography, makeStyles, } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Citas from "./Citas/Citas";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
    text: {
      color: "#159DE9",
      marginLeft:"8vh"
    },
    box: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "10px",
      color: "#159DE9",
    },
  }));

export default function Appointment({withoutTitle}){
    const api = 'http://localhost:3001';
    const classes = useStyle();
    const user = useSelector((store) => store.reducerLog.info);
    const [citas, setCitas] = useState([])
    const loadData = async () => {
      axios({
        method: 'POST',
        url: `${api}/cita`,
        data: { profesionalId:user.id ,get: true}
    }).then((res)=>{
        setCitas(res.data);})}

    useEffect(()=>{loadData()},[]);
    return(
        <Box className={classes.box}>
            {withoutTitle? null : <Typography className={classes.text} variant='h3'>Citas</Typography>}
            <Citas citas={citas} reLoad={loadData}/>
        </Box>
    )
}