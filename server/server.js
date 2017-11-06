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
    console.log('testing for db access')
}, 2000);

//product endpoints
app.get('/api/product/:id', prodCtrl.getProduct);
app.get('/api/products', prodCtrl.readProducts);

//cart endpoints
app.get('/api/cart/:productid', cartCtrl.getProductsOnCart);
app.put('/api/cart/:id',cartCtrl.addToCart);

//order endpoints
app.get('/api/products', orderCtrl.getProductsOnOrders);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT} `))