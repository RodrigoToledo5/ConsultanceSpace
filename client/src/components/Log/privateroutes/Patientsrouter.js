import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux';
import PatientsDashboard from '../../Patient/PatientsDashboard';

export default function PatientsRouter({component,...rest}){
    const user = useSelector((store) => store.reducerLog.user)
    function checkUser(){
       if(user.tipo_usuario==="paciente")return true 
       else return false
    }
    return(
  
        <Route {...rest}>{ checkUser()?<PatientsDashboard/>:<Redirect to="/login"/>}</Route>
    )
}