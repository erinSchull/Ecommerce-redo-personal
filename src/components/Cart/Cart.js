import React, { Component } from 'react';

import { connect } from 'react-redux';
import { readCartProducts, removeFromCart, createOrder, clearCart } from './../../ducks/reducer';

class Cart extends Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.readCartProducts();
    }
    handleClick() {
        this.props.createOrder();
        // this.props.clearCart(); //uncomment when working back to front
    }
    
    render() {
        console.log('cart', this.props.cart); //no touchy
        return (
            <div className="cart-app" >
                <h2>Welcome To Your Cart!</h2>
                <h3>Let's see what you want</h3>

                <div className="cart-map" >
                    {this.props.cart.map((products, i) => {

                        return (
                            <div key={i} className="product">

                                <img src={products.img} alt={products.title} className='product-image' />
                                <p>Item: #{products.productid}</p>
                                <p>Description: {products.title}</p>
                                <p className="price">Product Price: ${products.price}</p>


                                <button className="prod-button" onClick={() => this.props.removeFromCart(products.id)} >I changed my mind</button>
                            </div>

                        )
                    })}
                </div>
                <div>
                    <a href='/#/orders' >
                        <button onClick={this.handleClick}>Submit order</button>
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