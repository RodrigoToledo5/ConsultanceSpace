import axios from "axios";
const api = 'http://localhost:3001';
export const GET_PROFESIONAL = 'GET_PROFESIONAL';
export const GET_PATIENT = 'GET_PATIENT';
export const ADD_PATIENT = 'ADD_PATIENT';
export const GET_MYPATIENTS = 'GET_MYPATIENTS';
export const REMOVE_MYPATIENTS = 'REMOVE_MYPATIENTS';
export const CLEAR_MY_PATIENTS = 'CLEAR_MY_PATIENTS';
export const GET_EARNINGS = 'GET_EARNINGS';
export const GET_APPOINTMENTS = 'GET_APPOINTMENTS'

export const searchprofesional = (input)=>{
    if(input.includes('@')){
        return async (dispatch) => {
            const res = await axios.get(`${api}/profesional?email=${input}`)
            dispatch({ type: GET_PROFESIONAL, payload:  res.data })
        }
    }
    else{
        return async (dispatch) => {
        const res = await axios.get(`${api}/profesional?fullName=${input}&speciality=${input}`)
        dispatch({ type: GET_PROFESIONAL, payload:  res.data })
        }
}}

export const getPatient = (name) => {
    return async (dispatch) =>{
        const patient = await axios.get(`${api}/patients?nombre=${name}`)
        dispatch({type:GET_PATIENT, payload: patient.data})
    }

}
export const addPatient = (data) => {
    return async(dispatch) =>{
        const patients = await axios({
            method: 'POST',
            url: `${api}/add-patients`,
            data: data
        })
        dispatch({type: ADD_PATIENT, payload: patients.data})
    }
}

export const removeMyPatient = (data) => {
    return async(dispatch) => {
        axios({
            method: 'DELETE',
            url: `${api}/del-mypatients`,
            data: data
        })
        dispatch({type: REMOVE_MYPATIENTS})
    }
} 

export const getMyPatients = (data) =>{
    return async(dispatch) =>{
        const patients = await axios.get(`${api}/my-patients?email=${data}`)
        dispatch({type: GET_MYPATIENTS, payload: patients.data})
    }
}

export const clearMypatients = ()=>{
    return{
        type: CLEAR_MY_PATIENTS,
    }
}

export const getEarnings = () => {
    return async (dispatch)=>{
        const earnings = await axios.get(`${api}/treatmentsAll`)
        dispatch({type: GET_EARNINGS, payload: earnings.data})
    }
}

export const getAppointment =  (profesionalId, get)=>{
    return  async (dispatch)=>{
          await axios({
             method: 'POST',
             url: `${api}/cita`,
             data: 
             { 
            profesionalId: profesionalId, 
             get: get
             }
         }).then((res)=> dispatch({type:GET_APPOINTMENTS, payload: res.data})) 
    }
 }






