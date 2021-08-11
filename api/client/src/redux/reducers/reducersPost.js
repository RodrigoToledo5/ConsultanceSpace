import {CONSTANT_POST} from "../actions";

const inicialState={
    activity:{}
}

export default function reducerPost(state=inicialState,action){
    switch(action.type){
        case CONSTANT_POST:
            return{
                ...state,
                activity:action.payload
        };
        default:
            return {...state};
    }
} 
