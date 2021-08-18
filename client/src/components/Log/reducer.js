import { POST_LOG, DESLOG } from "./actions";

const initialState = {
    user:{} // info del usuario logeado
}

export default function reducerLog (state = initialState, action){
    switch (action.type) {
        case POST_LOG:
            return {
                ...state,
                user: action.payload
            }
        case  DESLOG:{
            return {
                ...state,
                user:{},
            }
        }
        default:
            return state;
    }
}