import axios from "axios";

export const POST_LOG = 'POST_LOG';

const api = 'http://localhost:3001';

export const postLogIn = (email)=>{
    return async (dispatch) => {
    const res = await axios({
            method: 'POST',
            url: `${api}/login`,
            data: {email:email}
        })
    dispatch({ type: POST_LOG, payload:  res.data })
}}

