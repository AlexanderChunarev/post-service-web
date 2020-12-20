import {Switch, Route} from 'react-router-dom';
import React from 'react';
import CreateOrderForm from "./components/CreateOrder/CreateOrder";

export function CabinetRouter() {

    return (
        <>
            <Switch>
                {<Route path={`/user-cabinet/create-order`} component={CreateOrderForm}/>}
            </Switch>
        </>
    )
}