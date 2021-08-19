import axios from 'axios';
export const GET_PATIENT = 'GET_PATIENT';

const api = 'http://localhost:3001'

export const getPatient = (name) => {
    return async (dispatch) =>{
        const patient = await axios.get(`${api}/patients?nombre=${name}`)
        dispatch({type:GET_PATIENT, payload: patient.data})
        console.log(patient)
    }

}