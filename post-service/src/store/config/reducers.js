import {combineReducers} from "redux";
import {login} from '../partials/profile/reducers';
import {createOrder} from "../partials/Order/reducers";

export const appReducer = combineReducers({
    login: login,
    createOrder: createOrder,
}); 
