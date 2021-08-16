import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux';

export default function ProfesionalRouter({component,...rest}){
    const user = useSelector((store) => store.reducerLog.user)
    const checkRool=()=>{
        if(user&&user.tipo_usuario==="profesional")return true
        else return false
    }
    return(
        <Route {...rest}>{checkRool()?component():<Redirect to="/login"/>}</Route>
    )
}