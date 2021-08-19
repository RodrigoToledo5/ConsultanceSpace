import axios from "axios";
const api = 'http://localhost:3001';
export const GET_PROFESIONAL = 'GET_PROFESIONAL';

export const searchprofesional = (fullname)=>{
    return async (dispatch) => {
    const res = await axios({
            method: 'GET',
            url: `${api}/profesional`,
            data: {nombre:fullname}
        })
    dispatch({ type: POST_SIGN_IN, payload:  res.data })
}}

export const getPatient = (name) => {
    return async (dispatch) =>{
        const patient = await axios.get(`${api}/patients?nombre=${name}`)
        dispatch({type:GET_PATIENT, payload: patient.data})
        console.log(patient)
    }

}
