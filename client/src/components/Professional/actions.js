import axios from "axios";
const api = 'http://localhost:3001';
export const GET_PROFESIONAL = 'GET_PROFESIONAL';
export const GET_PATIENT = 'GET_PATIENT';

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
