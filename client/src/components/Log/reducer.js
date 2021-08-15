import { POST_LOG } from "./actions";

const initialState = {
    user={}
}

export default function reducerSign (state = initialState, action){
    switch (action.type) {
        case POST_LOG:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}