import { Box, Typography, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEarnings } from "../actions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const data = [
  {
    name: "Lunes",
    ingresos: 2400,
    amt: 2400,
  },
  {
    name: "Martes",
    ingresos: 1398,
    amt: 2210,
  },
  {
    name: "Miércoles",
    ingresos: 9800,
    amt: 2290,
  },
  {
    name: "Jueves",
    ingresos: 3908,
    amt: 2000,
  },
  {
    name: "Viernes",
    ingresos: 4800,
    amt: 2181,
  },
  {
    name: "Sábado",
    ingresos: 3800,
    amt: 2500,
  },
  {
    name: "Domingo",
    ingresos: 4300,
    amt: 2100,
  },
];

const useStyle = makeStyles((theme) => ({
  text: {
    color: "#159DE9",
  },
  box: {
    padding: "10px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    color: "#159DE9",
  },
}));

export default function Managment() {
  const classes = useStyle();
  const dispatch = useDispatch()
  const date = new Date("2021-08-26T18:56:42.951Z");
  const resultado = date.getDay();
  console.log(resultado);
 
//0 domingo 1 lunes......

  useEffect(() => {
    dispatch(getEarnings());
  }, [dispatch]);

  return (
    <Box className={classes.box}>
      <Typography variant="h4" color="blue">
        Ingresos Diarios
      </Typography>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ingresos" fill="#2196f3" />
      </BarChart>
    </Box>
  );
}
