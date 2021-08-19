import { GET_PATIENT } from "./actions";

const initialState={
    patients:[]
}

export default function reducerSearchPatients (state=initialState, action){
    switch (action.type) {
        case GET_PATIENT:
            console.log(action.payload);
            return {
                ...state,
                patients: action.payload
            }
        default:
            return state
    }

}