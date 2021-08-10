import './App.css';
import {Route,Switch} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Nav from './components/Header/Nav';
import Sign from './components/Sign/sign';
import Log from './components/Log/Log';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Nav}/>
        <Route path="/sign-in" component={Sign}></Route>
        <Route path="/log-in" component={Log}></Route>
      </Switch>
    </>
  );
}

export default App;
