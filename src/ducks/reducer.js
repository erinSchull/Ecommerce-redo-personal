import axios from 'axios';

let initialState ={
    products: [],
    cart: [],
    orders: []
}

const GET_PRODUCT = 'GET_PRODUCT';
const ALL_PRODUCTS = 'ALL_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS';
const CREATE_ORDER = 'CREATE_ORDER';
const ALL_ORDERS = 'ALL_ORDERS';
const CLEAR_CART = 'CLEAR_CART';

//action creators to be called in reducer function

export function getProduct(productid) {
    const product = axios.get(`/api/product/${productid}`)
    .then(res => {
        console.log(res.data)
        return res.data
    })
    console.log(product)
    return{
        type: GET_PRODUCT,
        payload: product
    }
};

export function readProducts(){
    const products = axios.get('/api/products')
    .then(res => {
        return res.data
    })
    return{
        type: ALL_PRODUCTS,
        payload: products
    }
};

export function addToCart(productid){
    const cartProd = axios.post(`/api/cart/${productid}`)
    .then(res => {
        console.log('check if we get here cart');
        return res.data
    })
    return{
        type: ADD_TO_CART,
        payload: cartProd
    }
};

export function readCartProducts(productid){
    const cartProd = axios.get(`/api/cart/${productid}`)
    .then(res => {
        return res.data
    })
    return{
        type: GET_CART_PRODUCTS,
        payload: cartProd
    }
};

export function removeFromCart(id){
    console.log(id);
    const cartStuff = axios.delete(`/api/cart/${id}`)
    .then(res => {
        return res.data
    })
    return{
        type: REMOVE_FROM_CART,
        payload: cartStuff
    }
};

export function clearCart(){
    const cartCont = axios.put('/api/cart')
    .then(res => {
        return res.data
    })
    return{
        type: CLEAR_CART,
        payload: cartCont
    }
}

export function createOrder(){
    const orderProd = axios.post('/api/orders')
    .then(res => {
        return res.data
    })
    console.log('testing order submit');
    return{
        type: CREATE_ORDER,
        payload: orderProd
    }
};

export function readOrders(){
    const orders = axios.get('/api/orders')
    .then(res => {
        return res.data
    })
    return{
        type: ALL_ORDERS,
        payload: orders
    }
};



export default function reducer( state = initialState, action){
    switch(action.type) {
        case GET_PRODUCT + '_FULFILLED':
        return Object.assign({}, state, {products: action.payload});
        case ALL_PRODUCTS + '_FULFILLED':
        return Object.assign({}, state, {products: action.payload});
        case ADD_TO_CART + '_FULFILLED':
        const cartPlusOne = state.cart.slice();
        cartPlusOne.push(action.payload);
        return Object.assign({}, state, {cart: cartPlusOne});
        case REMOVE_FROM_CART + '_FULFILLED':
        // const cartMinusOne = state.cart.splice(action.payload, -1);
        return Object.assign({}, state, {cart: action.payload});
        case CLEAR_CART + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload});
        case GET_CART_PRODUCTS + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload});
        case CREATE_ORDER + '_FULFILLED':
        const orderPlusOne = state.cart.slice(action.payload);
        console.log(state);
        // orderPlusOne.push(action.payload); 
        return Object.assign({}, state, {orders: orderPlusOne});
        case ALL_ORDERS + '_FULFILLED':
        return Object.assign({}, state, {orders: action.payload});
        default: 
        return state
    }
}