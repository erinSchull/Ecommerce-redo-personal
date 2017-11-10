import React, { Component } from 'react';
// import './Orders.css';
import { connect } from 'react-redux';
import {readOrders} from './../../ducks/reducer';

class Orders extends Component {
    // componentDidMount() {
    //     this.props.readOrders();
    // }

    render() {
        console.log('orders', this.props.orders)
        return (
            <div className="orders-app" >
                <h3> Orders shown here</h3>

                <div>
                    {this.props.orders.map((products, i) => {

                        return (
                            <div key={i} className="product">

                                <img src={products.img} alt={products.title} className='product-image' />
                                <p>Item: #{products.productid}</p>
                                <p>Description: {products.title}</p>
                                <p className="price">Product Price: ${products.price}</p>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("state from Orders", state)
    return {
        cart: state.cart,
        products: state.products,
        orders: state.orders
    }
}

export default connect(mapStateToProps, { readOrders })(Orders);