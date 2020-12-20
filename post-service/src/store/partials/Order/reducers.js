import actions from '../actions-types';

const initialState = {
    order: {
        senderId: 1,
        recipientName: '',
        recipientSurname: '',
        recipientPhonenumber: '',
        parcelName: '',
        parcelDescription: '',
        status: ''
    },
    orderList:[],
}

export const createOrder = (state = initialState, action) => {
    switch (action.type) {
        case actions.CREATE_ORDER:
            return {
                ...state,
                order: action.payload
            }
        case actions.FETCH_RECEIVING_ORDERS:
            return {
                ...state,
                orderList: action.payload
            }
        case actions.FETCH_SENDED_ORDERS:
            return {
                ...state,
                orderList: action.payload
            }
        default:
            return state
    }
}

