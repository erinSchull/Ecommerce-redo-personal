import React, { Component } from 'react';
import './Products.css';
import { connect } from 'react-redux';
import { readProducts, addToCart } from './../../ducks/reducer';

class Products extends Component {
    componentDidMount() {
        this.props.readProducts();
    }
    addToCart(product){
        this.props.addToCart(product);
    }

    render() {
        
        return (
            <div className="product-app" >
                <h3> Products available for purchase</h3>
                <div className="product-display" >
                    {this.props.products.map((products, i) => {
                        
                        return (
                            <div key={i} className="product">

                                <img src={products.img} alt={products.title} className='product-image' />
                                <p>Item: #{products.productid}</p>
                                <p>Description: {products.title}</p>
                                <p className="price">Product Price: ${products.price}</p>
                                

                                <button className="prod-button" onClick={() => this.addToCart(products)}>Add this to my cart!</button>

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