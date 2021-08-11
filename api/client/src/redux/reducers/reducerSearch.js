import {
        GET_ACTION,
    } from "../actions";

const initialState={

}

export default function reducerSearch(state=initialState,action){
    switch(action.type){
        case GET_ACTION:
            return{
                ...state,
            };
        default:
             return state;
    }

}