import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux';


export default function PatientsRouter({component,...rest}){
    const user = useSelector((store) => store.reducerSign.user)
    const checkRool=()=>{
        if(user&&user.tipo_usuario==="paciente")return true
        else return false
    }
    return(
        <Route {...rest}>{checkRool()?component():<Redirect to="/login"/>}</Route>
    )
}