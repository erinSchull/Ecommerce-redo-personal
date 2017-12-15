require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive');


const prodCtrl = require('./controllers/product_controller');
const cartCtrl = require('./controllers/cart_controller');
const orderCtrl = require('./controllers/orders_controller');


const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
})

setTimeout(_ => {
    const db = app.get('db')
    console.log('testing for db access, should break before this shows')
}, 2000);

//these endpoints are tested in postman

//product endpoints
app.get('/api/product/:id', prodCtrl.getProduct);
app.get('/api/products', prodCtrl.readProducts);

//cart endpoints
app.get('/api/cart/:productid', cartCtrl.getProductsOnCart);
app.post('/api/cart/:productsid',cartCtrl.addToCart);
app.delete('/api/cart/:id',cartCtrl.removeFromCart);
app.put('/api/cart', cartCtrl.clearCart);

//order endpoints
app.get('/api/orders', orderCtrl.getProductsOnOrders);
app.post('/api/orders', orderCtrl.createOrderOnCart);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT} `))