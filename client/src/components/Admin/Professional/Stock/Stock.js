// Stock Component, fetch to Stock rute, need add to redux state for user
// render StockCard

import {
  Box,
  Button,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import StockCard from "./StockCard/StockCard";
import AddIcon from "@material-ui/icons/Add";
const axios = require("axios");

const testEmail = "test@gmail.com";

export default function Stock() {
  const [stock, updateStock] = useState([]);
  const loadData = () => {
    axios({
      method: "get",
      url: `http://localhost:3001/stock`,
      params: { email: testEmail },
    }).then(function (response) {
      updateStock([...response.data]);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const useStyle = makeStyles((theme) => ({
    paperContainer: {
      //margin:"10px"
      color: "white",
      backgroundColor: "#2196f3",
    },
    divider: { background: "white" },
    item: { paddingLeft: "10px" },
    button: { width: "150px", margin: "10px" },
  }));

  const editStock = (data = null, key = null) => {
    data && updateStock(data);
    if (key !== null) {
      let newStock = [...stock];
      newStock.splice(key, 1);
      updateStock(newStock);
    }
  };

  const classes = useStyle();
  return (
    <Box>
      <Box display="flex" width="100%" className={classes.paperContainer}>
        <Box width="35%" className={classes.item}>
          <Typography variant="h5">Item</Typography>
        </Box>
        <Divider
          flexItem={true}
          orientation="vertical"
          className={classes.divider}
        />
        <Box width="15%" paddingLeft="10px">
          <Typography variant="h5">Cantidad</Typography>
        </Box>
      </Box>
      <Divider className={classes.divider} />
      {(stock === "not found" || stock.length < 1)
        ? ""
        : stock.map((s, i) => (
            <StockCard
              updateStock={editStock}
              data={s}
              email={testEmail}
              key={i}
              index={i}
            />
          ))}
      <Box 
      display="flex"
      width= "100%"
      justifyContent="center"
      >
        <Button
          className={classes.button}
          disableElevation={true}
          onClick={() => {
            updateStock([...stock, { "": 0 }]);
          }}
        >
          <AddIcon />
        </Button>
      </Box>
    </Box>
  );
}
