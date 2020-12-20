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

const updateUserAction = (data) =>{
    const {name, surname, phonenumber, email} = data;
    return{
        type: actions.UPDATE_INFO,
        payload:{
            name, surname, phonenumber, email
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

export  const UpdateUser = (id, data) =>{
    return (dispatch) =>{
        axios.patch(`api/client/update/${id}`, data)
            .then(response => {
                dispatch(updateUserAction(response.data))
            })
    }
}