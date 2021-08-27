import axios from "axios";
const api = 'http://localhost:3001';
export const GET_HISTORIA = 'GET_HISTORIA';

export const searchHistory = (idPaciente)=>{
    
        return async (dispatch) => {
            const res=await axios.get(`${api}/medicalRecord?idPaciente=${idPaciente}`)
        dispatch({ type: GET_HISTORIA, payload:  res.data })
        
    }
}