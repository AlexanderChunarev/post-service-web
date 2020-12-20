import Main from "./templates/Main/Main";
import React from "react";
import Header from "./templates/Header/Header";
import {useDispatch} from "react-redux";
import * as jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import {logoutUser} from "../../store/partials/profile/actions";

function Layout() {
    const dispatch = useDispatch()

    jwt.verify(Cookies.get('token'), 'rEWbEvPXZFOiiGlh', function (err, decoded) {
        if (err && window.location.pathname !== '/') {
            const data = {status: false}
            dispatch(logoutUser(data))
            window.location.href = "/"
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