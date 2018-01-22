import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import drSeussIcon from './../../images/hat-icon.jpg';

class Header extends Component {
    render() {
        return (
            <div className="header" >
                <div className="title">
                    <img src={drSeussIcon} alt='Dr. Seuss Hat' className='icon' />
                    <h1 className='app-title' >Dr. Suess' Shop of Wonderful Extravaganza!</h1>
                </div>
                <div className= "navbar">
                    <Link className='Links' to='/' >
                        <p className='pages'>Shop</p>
                    </Link>
                    <Link className='Links' to='/cart' >
                        <p className='pages'>Cart</p>
                    </Link>
                    <Link className='Links' to='/orders' >
                        <p className='pages'>Orders</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header