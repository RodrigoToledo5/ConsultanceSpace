import './App.css';
import {Route,Switch} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Nav from './components/Header/Nav';
import Carousel from './components/Landing/Carousel/Carousel';

function App() {
  return (
    <>
        <Nav />
        <Carousel />
    </>
  );
}

export default App;
