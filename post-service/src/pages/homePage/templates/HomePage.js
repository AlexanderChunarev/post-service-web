import React from "react";
import Main from "./Main/Main";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

function HomePage() {
    function hasNotExpired(time) {
        return time < Date.now()
    }

    return (

        <>
            <Main/>
        </>
    )
}

export default HomePage