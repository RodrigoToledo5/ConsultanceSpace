import axios from "axios";

export const POST_SIGN_IN = 'POST_SIGN_IN';

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