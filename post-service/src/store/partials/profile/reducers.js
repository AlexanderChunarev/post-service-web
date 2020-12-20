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
    register_status: undefined
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case actions.REGISTER:
            return {
                ...state,
                register_status: "success"
            }
        default:
            return state
    }
}
