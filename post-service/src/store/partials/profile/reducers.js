import actions from '../actions-types';

const initialState = {
    user: {
        id: 1,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        role: 0,
    },
    register_status: undefined,
    isLoggedIn: false
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
        case actions.REGISTER:
            return {
                ...state,
                register_status: "success"
            }
        case actions.LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state
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

