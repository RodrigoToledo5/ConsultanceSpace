import { Box, makeStyles } from '@material-ui/core';
import Alert from "@material-ui/lab/Alert";
import axios from 'axios';
import { useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import { API } from '../..';
//import { getInfo } from '../Log/actions';

const useStyle = makeStyles(theme => ({
  magin: {
    margin: theme.spacing(2),
  },
  menuButton: {
    margin: theme.spacing(1),

  },
  fledDirection: {
    flexDirection: 'row-reverse',
  },
  bar: {
    background: "white",
    borderRadius: "5px"
  },
  text: {
    color: "#159DE9",
    marginRight: theme.spacing(100),
    marginLeft: theme.spacing(5)
  },
  box_container: {
    marginTop: theme.spacing(10),
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    '@media (min-width:600px)': {
      marginTop: theme.spacing(10),
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  },
  box: {
    width: "300px",
    '@media (min-width:600px)': {
      width: "600px",
      margin: "10px"
    }
  },

}))


function Subscripcion() {
  //var history = useHistory()
  //const dispatch=useDispatch();
  //const id = useSelector(state => state.reducerLog.info.id);
  //const profile = useSelector(state => state.reducerLog.user)

  
  const classes = useStyle();
  async function captureToken() {
    if (window.location.pathname === "/subscription") {
      const token = window.location.href.substring(window.location.href.indexOf("wallet="), window.location.href.indexOf("&id="));
      const id = window.location.href.substring(window.location.href.indexOf("id="), window.location.href.indexOf("&success=done"));

      const send = await axios({
        method: 'POST',
        url: `${API}/addSub`,
        data: {token:token.substring(7),id:id.substring(3)}
      })

    }
  }
  useEffect(() => {
      captureToken();
  }, [captureToken])
  return (
    <Box className={classes.box_container}>
      <Box className={classes.box} marginBottom="10px">
        <Alert severity="success"> Se han añadido 30 dias a su subscripcion</Alert>
      </Box>
    </Box>
  );
}

export default Subscripcion;