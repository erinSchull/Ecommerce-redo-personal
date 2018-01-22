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
                <h2 className='title' >Welcome to the Most Exciting Shop Ever!</h2>
                <h3 className='sub' > Find your heart's greatest desires here</h3>
                <div className='shop' >
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
                    <div className="about" >
                        <h3 className='abt-shop' >About the Shop</h3>
                        <h5 className='join' >Thank you for joining us at Dr. Seuss' Shop of Wondrous odds and ends!</h5>
                        <p className='descript' >Some of these things have been found amongst Dr. Seuss' books and belongings, and we have decided to share some of his wonderful collection with you! </p>
                    </div>
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