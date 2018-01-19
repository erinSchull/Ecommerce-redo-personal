import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="header" >
                <div className="title">
                    <h1>Dr. Suess' Shop of Wonderful Extravaganza!</h1>
                </div>
                <div className= "navbar">
                    <Link className='Links' to='/' >
                        <p>Product</p>
                    </Link>
                    <Link className='Links' to='/cart' >
                        <p>Cart</p>
                    </Link>
                    <Link className='Links' to='/orders' >
                        <p>Orders</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header