// CallToAction export default, height can be passed by params, text
// is not responsive
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import {
  Box,
  Button,
  Typography,
  makeStyles,
  Divider,
  TextField,
  InputBase,
  CircularProgress,
} from "@material-ui/core";
import { useState } from "react";

const axios = require("axios");

export default function StockCard({ data, email, updateStock, index }) {
  const useStyle = makeStyles((theme) => ({
    paperContainer: {
      //margin:"10px"
      color: "white",
      backgroundColor: "#2196f3",
    },
    root: {
      flexGrow: 1,
    },
    button: { variant: "text" },
    divider: { background: "white" },
    item: { paddingLeft: "10px" },
  }));
  let objKey = Object.keys(data)[0];
  const [mode, setMode] = useState(objKey.length === 0 ? "new" : "normal"); // modes are normal,edit,load,del,new
  const [value, setValue] = useState(0);
  const [itemName, setItemName] = useState("");
  const classes = useStyle();

  const onHandleChange = (e) => {
    setValue(e.target.value);
  };

  const onHandleChangeItemName = (e) => {
    setItemName(e.target.value);
  };

  const backReq = (method) => {
    axios({
      method: method,
      url: `http://localhost:3001/stock`,
      data: { email: email, item: objKey, quantity: parseInt(value, 10) },
    }).then(function (response) {
      setMode("normal");
      updateStock(response.data);
    });
  };

  const printMode = () => {
    switch (mode) {
      case "normal":
        return (
          <Box>
            <Button
              endIcon={<EditIcon />}
              className={classes.button}
              disableElevation={true}
              onClick={() => {
                setMode("edit");
              }}
            ></Button>
            <Button
              endIcon={<DeleteIcon />}
              className={classes.button}
              disableElevation={true}
              onClick={() => {
                setMode("del");
              }}
            ></Button>
          </Box>
        );
      case "load":
        return (
          <Box>
            <Button className={classes.button} disableElevation={true}>
              <CircularProgress size={20} />
            </Button>
          </Box>
        );
      case "edit":
        return (
          <Box>
            <Button
              endIcon={<CancelIcon />}
              className={classes.button}
              disableElevation={true}
              onClick={() => {
                setMode("normal");
              }}
            ></Button>
            <Button
              endIcon={<SaveIcon />}
              className={classes.button}
              disableElevation={true}
              onClick={() => {
                backReq("post");
                setMode("load");
              }}
            ></Button>
          </Box>
        );
      case "del":
        return (
          <Box>
            <Button
              endIcon={<DeleteIcon />}
              className={classes.button}
              disableElevation={true}
              onClick={() => {
                setMode("load");
                backReq("delete");
              }}
            ></Button>
            <Button
              endIcon={<CancelIcon />}
              className={classes.button}
              disableElevation={true}
              onClick={() => {
                setMode("normal");
              }}
            ></Button>
          </Box>
        );
      case "new":
        return (
          <Box>
            <Button
              endIcon={<CancelIcon />}
              className={classes.button}
              disableElevation={true}
              onClick={() => {
                updateStock(null, index);
              }}
            ></Button>
            <Button
              endIcon={<SaveIcon />}
              className={classes.button}
              disableElevation={true}
              onClick={() => {
                setMode("load");
                objKey = itemName;
                backReq("post");
                
              }}
            ></Button>
          </Box>
        );

      default:
        return "";
    }
  };
  return (
    <Box className={classes.paperContainer}>
      <Box display="flex" width="100%">
        <Box width="50%" display="flex">
          <Box width="70%" className={classes.item}>
            {mode === "new" ? (
              <TextField
                onChange={onHandleChangeItemName}
              />
            ) : (
              <Typography variant="h6">{`${objKey}`}</Typography>
            )}
          </Box>
          <Divider
            flexItem={true}
            orientation="vertical"
            className={classes.divider}
          />
          <Box width="25%" display="flex" justifyContent="flex-end">
            {mode === "edit" || mode === "new" ? (
              <TextField
                onChange={onHandleChange}
                inputRef={(input) => {
                  if (input != null && mode !== 'new') {
                    input.focus();
                  }
                }}
              />
            ) : (
              <Typography variant="h6">{`${data[objKey]}`}</Typography>
            )}
          </Box>
        </Box>
        <Box width="50%" display="flex" justifyContent="flex-end">
          {printMode()}
        </Box>
      </Box>
    </Box>
  );
}
