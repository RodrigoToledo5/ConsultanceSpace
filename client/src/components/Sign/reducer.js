import { GET_COUNTRIES ,POST_SIGN_IN} from "./actions";

const initialState = {
    countries:[],
    postSingIn: '',
}

export default function reducerSign (state = initialState, action){
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case POST_SIGN_IN:
            return {
                ...state,
            postSingIn: action.payload
            }
        default:
            return state;
    }
}