import React from 'react';
import cabinetLayout from '../pages/cabinetPage/Cabinet';
import {Route, Switch} from 'react-router-dom';
import HomePage from "../pages/homePage/templates/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";

export function AppRouter() {

    return (
        <>
            <Switch>
                <Route exact path={`/home`} component={HomePage}/>
                <Route exact path={`/login`} component={LoginPage}/>
                <Route exact path={`/register`} component={RegisterPage}/>
                <Route path={`/user-cabinet`} component={cabinetLayout}/>
            </Switch>
        </>
    )
}