import './App.css';
import {Route,Switch} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Nav from './components/Header/Nav';
import Sign from './components/Sign/Sign';
import Log from './components/Log/Log';
import Lorem from './components/Main/Lorem';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <> 
      <Route path="/sign-in" component={Sign}/>
      <Route path="/login" component={Log}/>
      <Route path="/" component={Nav}/>
      <Route path="/home" component={Main}></Route>
      <Route exact path="/" component={Lorem}/>
      <Route path="/" component={Footer}/>
    </>
  );
}

export default App;
