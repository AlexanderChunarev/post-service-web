import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function CreateOrderForm(props) {
    const classes = useStyles();
    const [name, setName] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off" >
            <div style={{}}>
                <TextField
                    id="outlined-name"
                    label="Ім'я отримувача"
                    value={name}
                    onChange={handleChange}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Прізвище отримувача"
                    value={name}
                    onChange={handleChange}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Моб. телефон"
                    value={name}
                    onChange={handleChange}
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label=""
                    fullWidth={200}
                    value={name}
                    onChange={handleChange}
                    variant="outlined"
                    />
            </div>

        </form>
    );
}