import axios from "axios";

export const POST_SIGN_IN = 'POST_SIGN_IN';
export const GET_COUNTRIES = 'GET_COUNTRIES';

const api = 'http://localhost:3001';

export const postSignIn = (user) => {
    user={
        ...user,
        type: 'paciente'
    }
    return (dispatch) => {
        return axios.post(`${api}/newUser`, user)
        .then(response => {
            dispatch({
                type: POST_SIGN_IN,
                payload: response.data
            })
        })
    }
}

export const getCountries = () => {
    return async (dispatch) => {
        const countries = await axios.get("https://restcountries.eu/rest/v2/all")
        dispatch({ type: GET_COUNTRIES, payload: countries.data })
        console.log(countries)
    }
}