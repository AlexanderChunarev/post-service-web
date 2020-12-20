import React from 'react'

import "./Main.css"
import LoginForm from "../components/LoginForm";

function LoginSection() {
    return (
        <section className="login-section">
            <h1>Вхід</h1>
            <LoginForm/>
        </section>
    )
}

export default LoginSection