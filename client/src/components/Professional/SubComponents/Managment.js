import 'date-fns';
import es from "date-fns/locale/es";
import { Box, Typography, makeStyles, Grid,  } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointment, getPatientPay } from "../actions";
import { DataGrid } from '@material-ui/data-grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


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
  const [initialDate, setInitialDate] = useState(new Date())
  const [finalDate, setFinalDate] = useState(new Date())
  const profesionalId = useSelector((state)=> state.reducerLog.info)
  const earnings = useSelector(state=> state.reducerSearchPatients.earnings)
  const patient = useSelector(state=>state.reducerSearchPatients.patient)
  const get = true;

  

const sumarDias = (date) =>{
  var dateOffset = (24*60*60*1000) * 7; 
  var myDate = new Date(date);
  myDate.setTime(myDate.getTime() + dateOffset);
  return myDate;
}

  const handleDateChange = (date) => {
    setInitialDate(date)
    setFinalDate(sumarDias(date))
  }
 
 
  const data = [
    {name: "lunes",
    ingresos: 0},
    {name: "martes",
    ingresos: 0},
    {name: "miercoles",
    ingresos: 0},
    {name: "jueves",
    ingresos: 0},
    {name: "viernes",
    ingresos: 0},
    {name: "sabado",
    ingresos: 0},
    {name: "domingo",
    ingresos: 0}
    
  ];

  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];


  useEffect(() => {
    dispatch(getAppointment(profesionalId.id, get ))
  }, [profesionalId.id, get, dispatch]);

  const weeklyEarnings = (name, ingresos)=>{
    let index = data.findIndex(data => data.name === name)
    if(index === -1) {
      data.push({name, ingresos, amt:ingresos*2})
    }
    else{
     data[index].ingresos = data[index].ingresos+ingresos
    }
  }

  function disableWeek(date) {
    return date.getDay() === 0 ||  date.getDay() === 2  || date.getDay() === 3  || date.getDay() === 4  || date.getDay() === 5  || date.getDay() === 6 ;
  }

  earnings && earnings.map(elemento =>{
    const day = elemento.date.substring(0,2);
    const month = elemento.date.substring(3,5);
    const year = elemento.date.substring(6,10);
    let date = dias[new Date(`${month} ${day}, ${year}`).getDay()]
    let ingresos = elemento.tratamientos.reduce((acc,cv)=>(acc + cv.price),0);
    const dates = new Date (month + "/" +  day  + "/" +  year)
    dates.setHours(0,0,0,0);
    initialDate.setHours(0,0,0,0);
    finalDate.setHours(0,0,0,0); 
      return (
        dates>=initialDate && dates<finalDate ?
      weeklyEarnings(date, ingresos)  : console.log("no hay registro")
      )
  })




  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fullName',
      headerName: 'Nombre completo',
      width: 190,
      editable: true,
    },
    {
      field: 'dateOfPay',
      headerName: 'Fecha de pago',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'treatment',
      headerName: 'Tratamiento',
      width: 160,
    },
    {
      field: 'paymentValue',
      headerName: 'Valor de pago',
      width: 180,
    }
  ];
  

    const rows = [];
    earnings &&
    earnings.forEach((cita) => {
      const day = cita.date.substring(0,2);
      const month = cita.date.substring(3,5);
      const year = cita.date.substring(6,10);
      const dates = new Date (month + "/" +  day  + "/" +  year)
      dates.setHours(0,0,0,0);
      initialDate.setHours(0,0,0,0);
      finalDate.setHours(0,0,0,0);
      // console.log(dates>=initialDate && dates<finalDate )
      if(dates>=initialDate && dates<finalDate ){
        let array = {
          id: cita.id,
          fullName: cita.pacienteFullName,
          lastName:  cita.note,
          dateOfPay: cita.date.substring(0,10),
          treatment: cita.tratamientos[0].treatmentName,
          paymentValue: cita.tratamientos[0].price,
        }
        rows.push(array);
      }
    });


  return (
    <>
    <Box>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MMMM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Periodo de ingresos"
          value={initialDate}
          onChange={handleDateChange}
          helperText = "Selecciona un inicio de semana"
          hintText="Solo elegir inicio de semana" shouldDisableDate={disableWeek}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        </MuiPickersUtilsProvider>
    </Box>
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
    
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>

    </>
  );
}
