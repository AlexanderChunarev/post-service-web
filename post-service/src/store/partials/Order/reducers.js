import actions from '../actions-types';

const initialState = {
    senderId: 1,
    recipientName: '',
    recipientSurname:'',
    recipientPhonenumber:'',
    parcelName:'',
    parcelDescription:'',
    status:''
}

export const createOrder = (state = initialState, action) => {
    switch (action.type) {
        case actions.CREATE_ORDER:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}