import {Route, Switch} from 'react-router-dom';
import React from 'react';
import HomePage from "../pages/homePage/templates/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";

export function AppRouter() {

    return (
        <>
            <Switch>
                <Route path={`/home`} component={HomePage}/>
                <Route path={`/login`} component={LoginPage}/>
            </Switch>
        </>
    )
}