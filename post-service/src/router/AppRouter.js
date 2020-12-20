
import {Switch, Route} from 'react-router-dom';
import React from 'react';
import cabinetLayout from '../pages/cabinetPage/Cabinet';
import {Route, Switch} from 'react-router-dom';
import React from 'react';
import HomePage from "../pages/homePage/templates/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";

export function AppRouter() {

    return (
        <>
            <Switch>
                {/*<Route exact path="/" component={}/>*/}
                {/*<Route path={`/login`} component={}/>*/}
                {/*<Route path={`/register`}/>} />*/}
                {<Route path={`/user-cabinet`} component={cabinetLayout}/>}
                <Route path={`/home`} component={HomePage}/>
                <Route path={`/login`} component={LoginPage}/>
            </Switch>
        </>
    )
}