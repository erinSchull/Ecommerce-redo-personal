import React, { Component } from 'react';

import thing1 from './../../images/thing1.jpeg';
import thing2 from './../../images/thing2.jpg';
import sunflower from './../../images/sunflower.jpg';
import everything from './../../images/all-the-stuff.jpg';

class Landing extends Component {
    render() {
        return (
            <main className='landing-page' >
                <div className='landing-left' >
                    <h1 className='landing-title' >Welcome to<br /> Dr. Seuss' Wondrous Shop</h1>
                    <a href='/shop'><button className='landing-button'> Take me to the Shop</button></a>
                </div>
                <div className='landing-right' >
                    <span className='landing-descript' >
                        <h3 className='descript-title' >Just a few of the wonderful things<br /> you will find in the shop!</h3>
                    </span>
                    <span className='image-top' >
                        <img src={thing1} alt='thing1' className='sample-products' />
                        <img src={thing2} alt='thing2' className='sample-products' />
                    </span>
                    <span className='image-bottom'>
                        <img src={sunflower} alt='sunflower' className='sample-products' />
                        <img src={everything} alt='everything' className='sample-products' />
                    </span>
                </div>
            </main>
        )
    }
}

export default Landing