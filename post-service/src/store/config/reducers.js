import {combineReducers} from "redux";
import {login} from '../partials/profile/reducers';

export const appReducer = combineReducers({
    login: login,
}); 
