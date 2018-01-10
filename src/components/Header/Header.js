import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="header" >
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
        )
    }
}

export default Header