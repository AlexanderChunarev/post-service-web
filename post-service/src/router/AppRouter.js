import {Switch, Route} from 'react-router-dom';
import React from 'react';
import LoginPage from "../pages/loginPage/templates/loginPage";

export function AppRouter() {

    return (
        <>
            <Switch>
                {/*<Route exact path="/" component={}/>*/}
                <Route path={`/login`} component={LoginPage}/>
                {/*<Route path={`/register`}/>} />*/}
            </Switch>
        </>
    )
}