import axios from "axios";

export const POST_LOG = 'POST_LOG';
export const INFO_USER = 'INFO_USER';
export const DESLOG = 'DESLOG';

const api = 'http://localhost:3001';

export const postLogIn = (email)=>{
    return async (dispatch) => {
    const res = await axios({
            method: 'POST',
            url: `${api}/login`,
            data: {email}
        })
    dispatch({ type: POST_LOG, payload:  res.data })
}}

export const getInfo = (user)=>{
    return async (dispatch) => {
    const res = await axios({
            method: 'POST',
            url: `${api}/info`,
            data: user
        })
    dispatch({ type: INFO_USER, payload:  res.data })
}}

export const desLog=()=>(dispatch)=>{
    dispatch({ type: DESLOG})
}

