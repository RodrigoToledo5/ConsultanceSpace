import {useHistory, Route} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {useEffect} from "react";
import {useUser } from "reactfire";


export default function ProfesionalRouter({component,...rest}){
    const user = useSelector((store) => store.reducerLog.user)
    let history=useHistory()
    var dashboard=function(){
        return null
    };
    useEffect(() => {
        if(user!=="profesional")history.push("./login")
    },[])
    return(
        <Route {...rest}>{component()}</Route>
    )
}