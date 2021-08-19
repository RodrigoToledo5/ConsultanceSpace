import  {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux';
import Dashboard from '../../Professional/ProfessionalDashboard';

export default function ProfesionalRouter({component:Component,...rest}){
    const user = useSelector((store) => store.reducerLog.user)
    function checkUser(){
       if(user.tipo_usuario==="profesional")return true 
       else return false
    }
    return(
        <Route {...rest}>{checkUser()?<Component/>:<Redirect to="/login"/>}</Route>
    )
}