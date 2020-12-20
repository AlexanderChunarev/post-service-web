import Main from "./templates/Main/Main";
import React from "react";
import Header from "./templates/Header/Header";
import {useDispatch} from "react-redux";
import * as jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import {logoutUser} from "../../store/partials/profile/actions";
import {useHistory} from "react-router-dom";

function Layout() {
    const dispatch = useDispatch()
    const history = useHistory();

    jwt.verify(Cookies.get('token'), 'rEWbEvPXZFOiiGlh', function (err, decoded) {
        if (err) {
            const data = {status: false}
            dispatch(logoutUser(data))
            history.push("/home")
        } else {
            history.push("/user-cabinet")
        }
    });

    return (
        <>
            <Header/>
            <Main/>
        </>
    )
}

export default Layout