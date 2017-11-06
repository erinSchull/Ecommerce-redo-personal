import axios from 'axios';

let initialState ={
    products: [],
    cart: [],
    orders: []
}

const GET_PRODUCT = 'GET_PRODUCT';
const ALL_PRODUCTS = 'ALL_PRODUCTS';
const ADD_REDUX_PRODUCT = 'ADD_REDUX_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const GET_CART_PRODUCTS = 'GET_CART_PRODUCTS';

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

export function addProductsOnRedux(){
    const products = axios.get('/api/product')
    .then(res => {
        return res.data
    })
    return{
        type: ADD_REDUX_PRODUCT,
        payload: products
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
    const cartProd = axios.put(`/api/cart/${productid }`)
    .then(res => {
        console.log('check if we get here');
        return res.data
    })
    return{
        type: ADD_TO_CART,
        payload: cartProd
    }
};

export function removeFromCart(productid){
    const cartProd = axios.delete(`/api/cart/${productid}`)
    .then(res => {
        return res.data
    })
    return{
        type: REMOVE_FROM_CART,
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


export default function reducer( state = initialState, action){
    switch(action.type) {
        case GET_PRODUCT + '_FULFILLED':
        return Object.assign({}, state, {products: action.payload});
        case ADD_REDUX_PRODUCT + '_FULFILLED':
        return Object.assign({}, state, {products: action.payload});
        case ALL_PRODUCTS + '_FULFILLED':
        return Object.assign({}, state, {products: action.payload});
        case ADD_TO_CART + '_FULFILLED':
        const cartPlusOne = state.cart.slice();
        cartPlusOne.push(action.payload);
        return Object.assign({}, state, {cart: cartPlusOne});
        case REMOVE_FROM_CART + '_FULFILLED':
        const cartMinusOne = state.cart.slice();
        cartMinusOne.splice(action.payload, 1);
        return Object.assign({}, state, {cart: cartMinusOne});
        case GET_CART_PRODUCTS + '_FULFILLED':
        return Object.assign({}, state, {cart: action.payload});
        default: 
        return state
    }
}