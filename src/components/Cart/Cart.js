import React, { Component } from 'react';
// import './Cart.css';
import { connect } from 'react-redux';
import { readCartProducts, removeFromCart, createOrder, clearCart } from './../../ducks/reducer';

class Cart extends Component {
    componentDidMount() {
        this.props.readCartProducts();
    }
    // componentWillReceiveProps(){
    //     this.props.removeFromCart();
    // }
    
    onClick() {
        this.props.createOrder(this.props.order.productsid);
        this.props.clearCart();
    }
    
    render() {
        const order = this.props.orders;
        console.log('cart', this.props.cart); //leave this until finished
        return (
            <div className="cart-app" >
                <h3>Let's see what you want... </h3>

                <div className="cart-map" >
                    {this.props.cart.map((products, i) => {

                        return (
                            <div key={i} className="product">

                                <img src={products.img} alt={products.title} className='product-image' />
                                <p>Item: #{products.productid}</p>
                                <p>Description: {products.title}</p>
                                <p className="price">Product Price: ${products.price}</p>


                                <button className="prod-button" onClick={this.onClick} >I changed my mind</button>
                            </div>

                        )
                    })}
                </div>
                <div>
                    <a href='/#/orders' >
                        <button onClick={() => this.props.createOrder(order.productsid)} >Submit order</button>
                    </a>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from Cart", state)
    return {
        products: state.products,
        cart: state.cart,
        orders: state.orders
    }
}

export default connect(mapStateToProps, { readCartProducts, removeFromCart, createOrder, clearCart })(Cart);