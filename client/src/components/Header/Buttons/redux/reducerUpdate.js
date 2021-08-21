import { UPDATE_PROFILE } from "./actions";

const initialState = {
  succes: {},  //estado
};

export default function reducerUpdate(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        succes: action.payload,
      };
    default:
      return state;
  }
}
