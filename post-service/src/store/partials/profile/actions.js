import actions from '../actions-types';
import axios from "axios";

const signInUser = (data) => {
    const {id, firstName, lastName, email, phone, token} = data;
    return {
        type: actions.LOGIN,
        payload: {
            id, firstName, lastName, email, phone, token
        }
    }
}

export const LoginUser = (data) => {
    return (dispatch) => {
        axios.post(`api/account/authenticate`, data)
            .then(response => {
                document.cookie = `token=${response.data.token}`
                dispatch(signInUser(response.data))
            })
    }
}