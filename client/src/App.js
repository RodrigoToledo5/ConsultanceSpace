import './App.css';
import {Route} from 'react-router-dom'
import Nav from './components/Header/Nav';
import Dashboard from './components/Admin/Professional/Dashboard';
import PatientsDashboard from './components/Patient/PatientsDashboard';
import Sign from './components/Sign/Sign';
import Log from './components/Log/Log';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ResetPassword from './components/ResetPassword/ResetPassword';
import PatientsRouter from './privateroutes/Patientsrouter';
import ProfesionalRouter from './privateroutes/Profesionalrouter ';



function App() {
  return (
    <> 
      <Route path="/sign-in" component={Sign}/>
      <Route path="/login" component={Log}/>
      <Route path="/reset-password" component={ResetPassword}/>
      <Route path="/" component={Nav}/>
      <ProfesionalRouter exact path="/profesional-dashboard" component={Dashboard}/> 
      <PatientsRouter exact path="/patient-dashboard" component={PatientsDashboard}/>
      <Route exact path="/" component={Main}/>
      <Route path="/" component={Footer}/>
    </>
  );
}

export default App;
