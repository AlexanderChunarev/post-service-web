import actions from '../actions-types';

const initialState = {
    id: 1,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: 0,
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}
export const update = (state = initialState, action) => {
    switch (action.type) {
        case actions.UPDATE_INFO:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

