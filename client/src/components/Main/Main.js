
import {Route,Switch} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import ReactCarousel from '../Landing/Carousel/Carousel';
import CallToAction from '../Landing/CallToAction/CallToAction';
import {  Box } from '@material-ui/core';

function Main() {
  return (
    <>
        <Box display="flex" marginTop="100px" justifyContent="center" padding="10px" width="100%">
          <Box width="60%" margin="10px"><ReactCarousel height={400}/></Box>
          <Box width="30%" margin="10px"><CallToAction height={400}/></Box>
        </Box> 
    </>
  );
}

export default Main;
