import React from 'react'
import Button from '@material-ui/core/Button';

import "./Main.css"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        '& > *': {
            textAlign: '',
            fontFamily: [
                'sans-serif',
            ].join(','),
        }
    },
    registerButton: {
        width: '50%',
        marginRight: theme.spacing(1),
        backgroundColor: '#d8232a',
        color: "white",
        '&:hover': {
            backgroundColor: '#ec3a41',
            boxShadow: 'none',
        },
    },
    loginButton: {
        width: '50%',
        color: '#d8232a',
        borderColor: "1px solid #d8232a",
        border: "1px solid #d8232a",
        '& .MuiButton-outlinedSecondary' : {
            color: '#d8232a',
            borderColor: "1px solid #d8232a",
        },
        '&:hover': {
            backgroundColor: '#d9d4d4',
            boxShadow: 'none',
        },
    }
}));

function Main() {
    const classes = useStyles();

    return (
        <main className="main">
            <section className="promo-section">
                <div className="promo-section-wrapper">
                    <div className="promo-section-actions">
                        <div>
                            <h1 className="promo-section-title">
                                Керуйте логістикою у Бізнес-кабінеті «Нова Пошта»
                            </h1>
                            <p className="promo-section-text">Зареєструйтеся у Бізнес-кабінеті та керуйте вашими посилками.
                                Замовляйте додаткові послуги та
                                сплачуйте за них.</p>
                        </div>
                        <div className={classes.root}>
                            <Button className={classes.registerButton} variant="outlined">
                                Зареєструватися
                            </Button>
                            <Button className={classes.loginButton} variant="outlined" color="secondary">
                                Увійти
                            </Button>
                        </div>
                    </div>
                    <img src="https://new.novaposhta.ua/img_cbc_landing_1-1.74a2217f1fc1d12a2d06.png" alt={""}/>
                </div>

            </section>
        </main>
    )
}

export default Main