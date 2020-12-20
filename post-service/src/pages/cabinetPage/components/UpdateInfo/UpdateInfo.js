import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import {useTextField} from "../../../../hooks/hooks";
import {statuses} from "../../../../models/statuses";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../../../../store/partials/Order/actions";

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
        height:'7ch',
        fontSize:'medium'
    },
}));

export default function UpdateForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const name = useTextField('', 'name');
    const surname = useTextField('', 'surname');
    const phone = useTextField('', 'phonenumber');
    const email = useTextField('', 'email');
    const user = useSelector(state => state.login)
    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            name: name.value,
            surname: surname.value,
            phonenumber: phone.value,
            email: email.value,
        }
        dispatch(createOrder(user.id+'',data))
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
            <h1>Зміна даних</h1>
            <div>
                <TextField
                    id="outlined-name"
                    label="Ім'я"
                    value={name.value}
                    {...name}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Прізвище"
                    value={surname.value}
                    {...surname}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Моб. телефон"
                    value={phone.value}
                    {...phone}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Email"
                    value={email.value}
                    {...email}
                    variant="outlined"
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                type={"submit"}
                size="small"
                className={classes.button}
                startIcon={<SaveIcon/>}
                onClick={()=>{console.log()}}
            >
                Створити
            </Button>
        </form>
    );
}