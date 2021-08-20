import { ADD_PATIENT, GET_MYPATIENTS, CLEAR_MY_PATIENTS } from "./actions";

const initialState={
    MyPatientsList:[]
}

export default function reducerAddPatients (state=initialState, action){
    switch (action.type) {
        case ADD_PATIENT:
            return {
                ...state,
                MyPatientsList: action.payload.pacientes
            }
        case GET_MYPATIENTS:
            return {
                ...state,
                MyPatientsList: action.payload.pacientes
            }
        case CLEAR_MY_PATIENTS:
            return {
                ...state,
                MyPatientsList: []
            }
        default:
            return state
    }

}