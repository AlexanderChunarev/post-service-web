import actions from '../actions-types';
import axios from "axios";

const loginUserAction = (data) => {
    return {
        type: actions.LOGIN,
        payload: data
    }
}

const registerUserAction = (data) => {
    return {
        type: actions.REGISTER,
        payload: data
    }
}

export const loginUser = (data) => {
    return (dispatch) => {
        axios.post(`api/account/authenticate`, data)
            .then(response => {
                document.cookie = `token=${response.data.token}`
                dispatch(loginUserAction(response.data))
            })
    }
}

export const registerUser = (data) => {
    return (dispatch) => {
        axios.post(`api/client/register`, data)
            .then(response => {
                dispatch(registerUserAction(response.data))
            })
    }
}