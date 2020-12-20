import React from "react";
import RegisterForm from "./templates/components/RegisterForm";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

function RegisterPage() {
    const registerStatus = useSelector(state => state.login.register_status)

    return (
        registerStatus === 'success' ? <Redirect to="/login"/> :
            <section className="login-section">
                <RegisterForm/>
            </section>
    )
}

export default RegisterPage