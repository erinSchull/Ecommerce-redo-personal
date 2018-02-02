import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Landing from './components/Landing/Landing';

export default (
    <div>
        <Switch>
            <Route component={Landing} exact path='/' />
            <Route component={Products} path='/shop' />
            <Route component={Cart} path= '/cart' />
            <Route component={Orders} path='/orders' />
            
        </Switch>
    </div>
)