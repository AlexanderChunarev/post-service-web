import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {useTextField} from "../../../../hooks/hooks";
import {useDispatch} from "react-redux";
import {registerUser} from "../../../../store/partials/profile/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '2rem',
        },
    },
    button: {
        margin: theme.spacing(1),
        width: '43ch',
        height: '7ch',
        fontSize: 'medium'
    },
}));

export default function CreateOrderForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const name = useTextField('', 'name');
    const surname = useTextField('', 'surname');
    const phone = useTextField('', 'phoneNumber');
    const email = useTextField('', 'email');
    const password = useTextField('', 'password');

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            name: name.value,
            surname: surname.value,
            phoneNumber: phone.value,
            email: email.value,
            password: password.value
        }
        dispatch(registerUser(data))
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
            <div>
                <TextField
                    id="outlined-name"
                    label="Ім'я"
                    required
                    value={name.value}
                    {...name}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Прізвище"
                    required
                    value={surname.value}
                    {...surname}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Моб. телефон"
                    required
                    value={phone.value}
                    {...phone}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    type='email'
                    label="Email"
                    required
                    value={email.value}
                    {...email}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Пароль"
                    type='password'
                    required
                    {...password}
                    value={password.value}
                    variant="outlined"
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                size="small"
                className={classes.button}
            >
                Зареєструватися
            </Button>
        </form>
    );
}