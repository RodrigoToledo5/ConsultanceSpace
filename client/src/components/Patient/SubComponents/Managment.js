import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import devImg from "../../../assets/img/etc/inDev.png"
//importaciones para mercadopago
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const FORM_ID = 'payment-form';

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

export default function Managment(){
    const classes = useStyle();
      
    function handleSummit(){
        
    }
    return(
        <Box className={classes.box}>
            <Typography variant='h4' color='blue'>Managment</Typography>
            
    <Grid >
      <Typography variant="h2" component="h2" >Detalle de productos</Typography>
      <Grid >
        <Grid >
          <Grid >
          <Grid >
            <Typography variant="h3" component="h3">Operacion</Typography>
          </Grid>
            <Grid >
                <img src="./assets/cardiologia.jfif" alt="foto del producto" ></img>
                <hr/>
                <Typography variant="h5" component="h5">Descripcion</Typography> 
                  <p>Lorem ipsum dolor</p>
                  <hr/>
                  <Typography variant="h5" component="h5">Precio $2,500</Typography>
                  <Grid>
                                <form action="http://localhost:3001/checkout" method="POST" id={FORM_ID} onSummit={handleSummit}>
                                    <input type="hidden" name="title" value="Opercacion" />
                                    <input type="hidden" name="price" value="2500" />
                                    <input type="submit" value="pagar"  />
                                    
                                </form>
                            </Grid>
                            <br/><br/><br/>
              </Grid> 
          </Grid>
          </Grid> 
      </Grid>
    </Grid>
  
        </Box>
    )
}