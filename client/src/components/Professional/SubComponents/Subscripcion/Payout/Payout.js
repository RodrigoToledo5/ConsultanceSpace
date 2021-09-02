import { Box, Typography, makeStyles, Button, Card} from "@material-ui/core";
import React from 'react';
import { API } from "../../../../..";
import { useSelector } from "react-redux";
const useStyle = makeStyles((theme) => ({
  principal: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: 'blue',
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: 'aqua'
  },
  form: {
    // backgroundColor: 'red',
    width: "70%",
    "@media (max-width : 900px)": {
      width: "70%",
    },
    "@media (max-width : 320px)": {
      width: "95%",
    },
  },
  container: {
    marginBottom: "50px",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#E8EEF4",
    borderRadius: "15px",
    paddingBottom: "20px",
    "@media (max-width : 900px)": {
      width: "70%",
    },
    "@media (max-width : 500px)": {
      width: "100%",
    },
  },
  items: {
    display: "row",
    justifyContent: "center",
    width: "100%",
  },
  btn: {
    marginTop: "3px",
    width: "200%",
    fontFamily: "Roboto",
  },
  text: {
    color: "#159DE9",
    fontFamily: "Roboto",
  },
  
  input: {
    color: "#159DE9",
    width: "100%",
  },
  title: {
    color: "#159DE9",
    fontFamily: "Roboto",
    padding: "1px",
    width: "-10px",
    height: "-20px"
  },
  hr: {
    width: "150%",
  },
  relative: {
    position: "absolute",
    backgroundColor: "#E8EEF4",
    top: "-20px",
    right: "47%",
    padding: "10px",
    fontFamily: "Roboto",
  },
  position: {
    position: "relative",
  },
  bullet: {
    margin: '15px',
    transform: 'scale(0.9)',
    marginBottom: 10,
    width: "64%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#2196f3",
    borderRadius: "20px",
    paddingBottom: "15px",
    minWidth: 290,
  },
  titleCard: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    padding: "5px",
    width: "-10px",
    height: "-20px"
  }
}));

export default function Payout(){
    const classes = useStyle();
    const profesionalId = useSelector(state => state.reducerLog.info.id)
    return(
        <Box className={classes.principal}>
        <Box className={classes.container}>
            <Card className={classes.bullet} variant="elevated" >
    <Box className={classes.bullet}>
      {/* <h3  className={classes.titleCard}>Managment</h3> */}
      <Typography className={classes.titleCard} variant="h4" component="h3" >Detalle del pago</Typography>
      <Box className={classes.box} >
        <Box className={classes.items} >
          <Box className={classes.items}>
          <Box className={classes.items}>
            {/* <h3  className={classes.title}>Operacion</h3> */}
          </Box>
            <Box  className={classes.items}>
                {/* <img src="./assets/cardiologia.jfif" alt="foto del producto" ></img> */}
                
                <h3  className={classes.titleCard} > Subscripcion mensual</h3> 
                <br/>
                  <p className={classes.titleCard}> Agregar un mes a su subscripcion </p>
                  <hr/>
                  <h3  className={classes.titleCard}>Precio $1,000</h3>
                  
                  <Box className={classes.form}>
                                <form className={classes.form}  action={`${API}/checkout`} method="POST" >
                                    <input type="hidden" name="title" value="Subscripcion Consultance Space" />
                                    <input type="hidden" name="id" value={profesionalId} />
                                    <Button color="default" className={classes.btn} type="submit" value="pagar">pagar</Button>
                                </form>
                            </Box>
                          </Box> 
                      </Box>
                      </Box> 
                  </Box>
                </Box>
                </Card>
              </Box>
        </Box>     
    )
}