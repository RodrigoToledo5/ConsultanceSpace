import './App.css';
import {Route,Switch} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Nav from './components/Header/Nav';
import ReactCarousel from './components/Landing/Carousel/Carousel';

function App() {
  return (
    <>
        <Nav />
        <div>
        <ReactCarousel />
        </div>
    </>
  );
}

export default App;
