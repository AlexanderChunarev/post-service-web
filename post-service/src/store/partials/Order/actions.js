import actions from '../actions-types';
import axios from "axios";

const createOrderAction = (data) => {
    return {
        type: actions.CREATE_ORDER,
        payload: data,
    }
}


const OrderListAction = (data) => {
    return {
        type: actions.FETCH_RECEIVING_ORDERS,
        payload: data,
    }
}

const SendedListAction = (data) => {
    return {
        type: actions.FETCH_SENDED_ORDERS,
        payload: data,
    }
}

export const createOrder = (data) => {
    return (dispatch) => {
        axios.post(`api/order/register`, data)
            .then(response => {
                console.log(response.data);
                dispatch(createOrderAction(response.data));
            })
    }
}

export const orderList = (phonenumber) => {
    return (dispatch) => {
        axios.get(`api/client/${phonenumber}/receiving-orders`)
            .then(response => {
                console.log(response.data);
                dispatch(OrderListAction(response.data));
            })
    }
}
export const sendedList = (id) => {
    return (dispatch) => {
        axios.get(`api/client/${id}/departure-orders`)
            .then(response => {
                console.log(response.data);
                dispatch(SendedListAction(response.data));
            })
    }
}
