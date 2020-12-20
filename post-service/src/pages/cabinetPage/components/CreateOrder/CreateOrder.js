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

export default function CreateOrderForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const recName = useTextField('', 'recipientName');
    const recSurname = useTextField('', 'recipientSurname');
    const recPhone = useTextField('', 'recipientPhone');
    const parcelName = useTextField('', 'parcelName');
    const parcelDescription = useTextField('', 'parcelDescription');
    const user = useSelector(state => state.login.user)
    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            senderId: user.id,
            recipientName: recName.value,
            recipientSurname: recSurname.value,
            recipientPhonenumber: recPhone.value,
            parcelName: parcelName.value,
            parcelDescription: parcelDescription.value,
            status: statuses.REGISTERED
        }
        dispatch(createOrder(data))
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
            <h1>Створити посилку</h1>
            <div>
                <TextField
                    id="outlined-name"
                    label="Ім'я отримувача"
                    value={recName.value}
                    {...recName}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Прізвище отримувача"
                    value={recSurname.value}
                    {...recSurname}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Моб. телефон"
                    value={recPhone.value}
                    {...recPhone}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Назва посилки"
                    value={parcelName.value}
                    {...parcelName}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Опис посилки"
                    {...parcelDescription}
                    value={parcelDescription.value}
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