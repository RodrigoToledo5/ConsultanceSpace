import axios from "axios";
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
const api = 'http://localhost:3001';

export const updateProfile = (user)=>{
    console.log(user)
    return async (dispatch) => {
    const res = await axios({
            method: 'PUT',
            url: `${api}/updateUser`,
            data: {...user}
        })
    dispatch({ type: UPDATE_PROFILE, payload:  res.data })
}}