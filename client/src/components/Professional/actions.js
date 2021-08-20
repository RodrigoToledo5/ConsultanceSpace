import axios from "axios";
const api = 'http://localhost:3001';
export const GET_PROFESIONAL = 'GET_PROFESIONAL';
export const GET_PATIENT = 'GET_PATIENT';
export const ADD_PATIENT = 'ADD_PATIENT';
export const GET_MYPATIENTS = 'GET_MYPATIENTS';
export const CLEAR_MY_PATIENTS = 'CLEAR_MY_PATIENTS'

export const searchprofesional = (input)=>{
    if(input.includes('@')){
        return async (dispatch) => {
            const res = await axios.get(`${api}/profesional?email=${input}`)
            dispatch({ type: GET_PROFESIONAL, payload:  res.data })
        }
    }
    else{
        return async (dispatch) => {
        const res = await axios.get(`${api}/profesional?fullName=${input}`)
        dispatch({ type: GET_PROFESIONAL, payload:  res.data })
        }
}}

export const getPatient = (name) => {
    return async (dispatch) =>{
        const patient = await axios.get(`${api}/patients?nombre=${name}`)
        dispatch({type:GET_PATIENT, payload: patient.data})
        console.log(patient)
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
