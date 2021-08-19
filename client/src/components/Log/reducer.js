import { POST_LOG, DESLOG, INFO_USER } from "./actions";

const initialState = {
    user:{}, // mail y tipo del usuario logeado
    info:{}, // hard info del user creado
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
        case  INFO_USER:{
            return {
                ...state,
                info: action.payload
            }
        }
        default:
            return state;
    }
}