import actions from '../actions-types';
import axios from "axios";

const loginUserAction = (data) => {
    console.log(data)
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

const logoutUserAction = (data) => {
    return {
        type: actions.LOGOUT,
        payload: data.status
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

export const logoutUser = (data) => {
    return (dispatch) => {
        document.cookie = ""
        dispatch(logoutUserAction(data))
        // window.location.href = '/'
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