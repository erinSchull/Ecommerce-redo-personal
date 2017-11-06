import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';

export default (
    <div>
        <Switch>
            <Route component={Header} />
        </Switch>
        <Switch>
            <Route component={Products} exact path='/' />
            <Route component={Cart} path= '/cart' />
            <Route component={Orders} path='/orders' />
            
        </Switch>
    </div>
)