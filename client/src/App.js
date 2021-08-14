import './App.css';
import {Route} from 'react-router-dom'
import Nav from './components/Header/Nav';
import Admin from './components/Admin/Professional/Admin';
import Sign from './components/Sign/Sign';
import Log from './components/Log/Log';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <> 
      <Route path="/sign-in" component={Sign}/>
      <Route path="/login" component={Log}/>
      <Route path="/" component={Nav}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/home" component={Main}/>
      <Route exact path="/" component={Lorem}/>
      <Route path="/" component={Footer}/>
    </>
  );
}

export default App;
