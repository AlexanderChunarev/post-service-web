import {Switch, Route} from 'react-router-dom';
import React from 'react';
import CreateOrderForm from "./components/CreateOrder/CreateOrder";
import StickyHeadTable from "./components/SendedListOrder/OrderList";
import SendedTable from "./components/ReceivingOrder/ReceivingList";
import UpdateForm from "./components/UpdateInfo/UpdateInfo";

export function CabinetRouter() {

    return (
        <>
            <Switch>
                {<Route path={`/user-cabinet/create-order`} component={CreateOrderForm}/>}
                {<Route path={`/user-cabinet/sended-list`} component={StickyHeadTable}/>}
                {<Route path={`/user-cabinet/receiving-list`} component={SendedTable}/>}
                {<Route path={`/user-cabinet/update-info`} component={UpdateForm}/>}
            </Switch>
        </>
    )
}