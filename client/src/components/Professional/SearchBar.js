import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, makeStyles, TextField, Toolbar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {getPatient} from './actions'

const useStyle = makeStyles((theme) => ({
  
    toolBar:{
    display: 'flex',
    justifyContent: 'flex-end',
    },
    searchContainer:{
      display: "flex",
    },

    searchIcon:{
      alignSelf: "flex-end",
      marginBottom: "5px",
    },

    searchInput:{
      width:"200px",
      margin: "5px",
    },
    inputLabel:{
      color: "#2196f3 !important",
  },

  }));


  export default function SearchBar(){
    
    const [name, setName]=useState('');
    const classes = useStyle();
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        setName(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getPatient(name)) 
    }

   
    return(
      <>
        <Toolbar className={classes.toolBar}>
        <div className={classes.searchContainer}>
        
        <TextField
        placeholder="Busca un paciente"
        className={classes.searchInput}
        inputProps={{className: classes.inputLabel}}
        onChange={(e)=>handleChange(e)}
        value={name}
        />
        <Button
        onClick={(e)=>handleSubmit(e)}
        startIcon={<SearchIcon/>}
        ></Button>
        </div>
        </Toolbar>
        </>
    )
}