import React, { Component } from 'react';
import Review from './Review';

class Product extends Component {
    render() {
        return (
            <div>
                <h1>Product Component</h1> 
                <Review/>
            </div>
        );
    }
}

export default Product;