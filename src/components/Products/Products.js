import React, { Component } from 'react';

import { connect } from 'react-redux';
import { readProducts, addToCart } from './../../ducks/reducer';

class Products extends Component {
    componentDidMount() {
        this.props.readProducts();
    }

    render() {
        
        return (
            <div className="product-app" >
                <h2>Welcome to the Most Exciting Shop Ever!</h2>
                <h3> Find your heart's greatest desires here</h3>
                <div className="product-display" >
                    {this.props.products.map((products, i) => {
                        
                        return (
                            <div key={i} className="product">
                                <img src={products.img} alt={products.title} className='product-image' />
                                <p className="price">Product Price: ${products.price}.00</p>
                                <p>Item: #{products.productid}</p>
                                <p>Description: {products.title}</p>
                                

                                <button className="prod-button" onClick={() => this.props.addToCart(products.productid)}>Add this to my cart!</button>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("state from Products", state)
    return {
        products: state.products,
        cart: state.cart
    };
}
// const mapDispatchToProps= {
//     addToCart: addToCart
// }

export default connect(mapStateToProps, { readProducts, addToCart })(Products);