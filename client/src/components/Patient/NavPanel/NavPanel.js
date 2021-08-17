import {
  Container,
  Grid,
  Box,
  Link,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import Appointment from "../Appointment";
import Attention from "../Attention";
import Professionals from "../Professionals";
import Managment from "../Managment";

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
    maxHeight: "225px"
  },
  btn: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

export default function NavPanel({ updateComponent }) {
  const classes = useStyle();
  const [actComp, setaActComp] = useState("Inicio");
  const routes = [
    { Appointment: <Appointment /> },
    { Managment: <Managment /> },
    { Attention: <Attention /> },
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
