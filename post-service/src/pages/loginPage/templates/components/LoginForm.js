import React from 'react'
import Button from '@material-ui/core/Button';

import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {useTextField} from "../../../../hooks/hooks";
import {LoginUser} from "../../../../store/partials/profile/actions";

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

function LoginForm() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const email = useTextField('korben@team.com', 'email');
    const password = useTextField('asd', 'password');
    const singIn = (e) => {
        e.preventDefault()
        const data = {
            login: email.value,
            password: password.value
        }
        dispatch(LoginUser(data))
    }
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={singIn}>
                <TextField id="outlined-basic" {...email} type={'email'} required label="Email" variant="outlined" value={"korben@team.com"}/>
                <TextField id="outlined-basic" {...password} type={'password'} required label="Password" variant="outlined" value={"asd"}/>
                <Button type='submit' className={classes.registerButton} variant="outlined">
                    Увійти
                </Button>
            </form>
        </div>
    )
}

export default LoginForm