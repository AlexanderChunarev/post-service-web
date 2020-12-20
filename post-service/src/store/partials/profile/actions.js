import actions from '../actions-types';
import axios from "axios";

const loginUserAction = (data) => {
    console.log(data)
    return {
        type: actions.LOGIN,
        payload: data
    }
}

const updateUserAction = (data) => {
    const {name, surname, phonenumber, email} = data;
    return {
        type: actions.UPDATE_INFO,
        payload: {
            name, surname, phonenumber, email
        }
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
                window.location.href = '/user-cabinet'
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

export const UpdateUser = (id, data) => {
    return (dispatch) => {
        axios.patch(`api/client/update/${id}`, data)
            .then(response => {
                dispatch(updateUserAction(response.data))
            })
    }
}