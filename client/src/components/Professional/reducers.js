import { GET_PATIENT } from "./actions";

const initialState={
    patients:[]
}

export default function reducerProfesional (state=initialState, action){
    switch (action.type) {
        case GET_PATIENT:
            return {
                ...state,
                patients: action.payload
            }
       
    
        default:
           return state
    }

}