import React, { Component } from 'react';
// import './Cart.css';
import { connect } from 'react-redux';
import {readCartProducts, removeFromCart} from './../../ducks/reducer';

class Cart extends Component {
    // componentDidMount() {
    //     this.props.readCartProducts(1);
    // }

    render() {
        console.log(this.props.cart);
        return (
            <div className="cart-app" >
                <h3> Cart shown here</h3>

                <div>
                {this.props.cart.map((products, i) => {
                        
                        return (
                            <div key={i} className="product">

                                <img src={products.img} alt={products.title} className='product-image' />
                                <p>Item: #{products.productid}</p>
                                <p>Description: {products.title}</p>
                                <p className="price">Product Price: ${products.price}</p>
                                

                                <button className="prod-button" onClick={this.props.removeFromCart}>I changed my mind</button>

                            </div> 
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from Cart", state)
    return {
        cart: state.cart,
        orders: state.orders
    }
}

export default connect(mapStateToProps, {readCartProducts, removeFromCart})(Cart);