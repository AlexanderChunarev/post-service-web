import {Switch, Route} from 'react-router-dom';
import React from 'react';
import CreateOrderForm from "./components/CreateOrder/CreateOrder";
import StickyHeadTable from "./components/SendedListOrder/OrderList";

export function CabinetRouter() {

    return (
        <>
            <Switch>
                {<Route path={`/user-cabinet/create-order`} component={CreateOrderForm}/>}
                {<Route path={`/user-cabinet/sended-list`} component={StickyHeadTable}/>}
            </Switch>
        </>
    )
}