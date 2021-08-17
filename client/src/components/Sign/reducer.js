import { GET_COUNTRIES, POST_SIGN_IN, FLAG_LOG } from "./actions";

const initialState = {
  countries: [],
  postSingIn: "",
  flagLog: false,
};

export default function reducerSign(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case POST_SIGN_IN:
      return {
        ...state,
        postSingIn: action.payload,
      };
    case FLAG_LOG:
      return {
        ...state,
        flagLog: action.payload,
      };
    default:
      return state;
  }
}
