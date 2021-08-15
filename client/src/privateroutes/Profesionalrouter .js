import {Redirect, Route} from 'react-router-dom'
//simulacion checkear 
let auth;
auth=true;

export default function ProfesionalRouter({component,...rest}){
    return(
        <Route {...rest}>{auth?component():<Redirect to="/login"/>}</Route>
    )
}