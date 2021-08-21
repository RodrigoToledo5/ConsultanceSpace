import axios from "axios";
const api = 'http://localhost:3001';
export const GET_APPOINTMENT_PATIENT = 'GET_APPOINTMENT_PATIENT';
export const GET_PROFESSIONAL = 'GET_PROFESSIONAL';

export const getAppointment =  (pacienteId, get)=>{
   return  async (dispatch)=>{
         await axios({
            method: 'POST',
            url: `${api}/cita`,
            data: 
            { 
            pacienteId, 
            get
            }
        }).then((res)=> dispatch({type:GET_APPOINTMENT_PATIENT, payload: res.data})) 
   }
}

export const getProfessional = (pacienteId) => {
   return async (dispatch) =>{
      const professionals = await axios.get(`${api}/relation?pacienteId=${pacienteId}`);
      dispatch({type:GET_PROFESSIONAL, payload: professionals.data})
   }
}
