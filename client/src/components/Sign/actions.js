import axios from "axios";

export const POST_SIGN_IN = 'POST_SIGN_IN';
export const GET_COUNTRIES = 'GET_COUNTRIES';

const api = 'http://localhost:3001';

export const postSignIn = (user)=>{
    return async (dispatch) => {
    const res = await axios({
            method: 'POST',
            url: `${api}/newUser`,
            data: user
        })
    dispatch({ type: POST_SIGN_IN, payload:  res.data })
}}


export const getCountries = () => {
    return async (dispatch) => {
        const countries = await axios.get("https://restcountries.eu/rest/v2/region/americas")
        dispatch({ type: GET_COUNTRIES, payload: countries.data })
        
    }
}