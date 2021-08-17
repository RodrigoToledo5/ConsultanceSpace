import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Typography, Box, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ButtonLogout from "./ButtonLogout";
import ButtonLogin from "./ButtonLogin";
import ButtonSignIn from "./ButtonSignIn";
import ButtonHome from "./ButtonHome";
import { useFirebaseApp, useUser } from "reactfire";
import ButtonDashboard from "./ButtonDashboard";
import { postLogIn } from "../Log/actions";
import reducerSign from "../Sign/reducer";

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
    display: "flex",
    flexDirection: "row",
  },
}));

export default function Nav() {
  const classes = useStyle();
  const user = useUser();
  const dispatch = useDispatch();

  const [logFlag, setLogFlag] = useState(false);

  let history = useHistory();
  const userS = useSelector((store) => store.reducerLog.user);
  const proFlag = useSelector((store) => store.reducerSign.flagLog);
  function handleClick(navlink) {
    history.push(navlink);
  }

  function checkLogin() {
    if (!user.data) return true;
    else return false;
  }

  useEffect(()=>{
    if(!userS.email && user.data && user.data.email && !proFlag){
      console.log(user.data);
        if(!logFlag){
        dispatch(postLogIn(user.data.email));}
    }else{setLogFlag(false)}},[userS.email,user.data])

  return (
    <nav className={classes.nav}>
      <AppBar className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.box}>
            <ButtonHome />
            {checkLogin() ? (
              <>
                <ButtonLogin />
                <ButtonSignIn />
              </>
            ) : (
              <>
                <ButtonDashboard />
                <ButtonLogout setLogFlag={setLogFlag} />
              </>
            )}            
          </Box>
          <Typography className={classes.text} variant="h6">
            Consultance Space
          </Typography>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
