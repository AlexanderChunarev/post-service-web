import {Switch, Route} from 'react-router-dom';
import React from 'react';
import cabinetLayout from '../pages/cabinetPage/Cabinet';

export function AppRouter() {

    return (
        <>
            <Switch>
                {/*<Route exact path="/" component={}/>*/}
                {/*<Route path={`/login`} component={}/>*/}
                {/*<Route path={`/register`}/>} />*/}
                {<Route path={`/user-cabinet`} component={cabinetLayout}/>}
            </Switch>
        </>
    )
}