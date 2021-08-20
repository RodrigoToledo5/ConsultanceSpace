import  {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux';
import Dashboard from '../../Professional/ProfessionalDashboard';
import {useUser,useFirebaseApp } from "reactfire";

export default function ProfesionalRouter({component:Component,...rest}){
    const user = useSelector((store) => store.reducerLog.user);
    const userFire=useUser();
    function checkUser(){
        if(user.tipo_usuario==="profesional"){
            if(userFire.data.emailVerified)return true
         } 
        else return false;
    }
    return(
        <Route {...rest}>{checkUser()?<Component/>:<Redirect to="/"/>}</Route>
    )
}