import actions from '../actions-types';
import axios from "axios";

const createOrderAction = (data) =>{
    const {senderId,
        recipientName,
        recipientSurname,
        recipientPhone,
        parcelName,
        parcelDescription,
        status} = data;
    return {
        type: actions.CREATE_ORDER,
        payload: {
            senderId,
            recipientName,
            recipientSurname,
            recipientPhone,
            parcelName,
            parcelDescription,
            status
        }
    }
}

export const createOrder = (data) =>{
    return (dispatch) => {
        axios.post(`api/order/register`, data)
            .then(response => {
                dispatch(createOrderAction(response.data))
            })
    }
}