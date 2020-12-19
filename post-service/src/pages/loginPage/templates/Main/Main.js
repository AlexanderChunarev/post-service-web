import React from 'react'

import "./Main.css"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch} from "react-redux";
import LoginForm from "../components/LoginForm";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: 400,
        marginTop: 128,
        '& > *': {
            margin: theme.spacing(1),
            textAlign: '',
            fontFamily: [
                'sans-serif',
            ].join(','),
        }
    },
    registerButton: {
        marginRight: theme.spacing(1),
        backgroundColor: '#d8232a',
        color: "white",
        '&:hover': {
            backgroundColor: '#ec3a41',
            boxShadow: 'none',
        },
    },
}));

function Main() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const singIn = (data) => {
        console.log(data)
        // dispatch(LoginUser())
    }
    return (
        <main className="main">
            <section className="login-section">
                <LoginForm/>
            </section>
        </main>
    )
}

export default Main