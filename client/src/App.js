import './App.css';
import {Route,Switch} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Nav from './components/Header/Nav';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Nav}/>
        
      </Switch>
    </>
  );
}

export default App;
