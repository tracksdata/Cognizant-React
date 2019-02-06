import React, { Component } from 'react';

class Product extends Component {
    render() {
        let {product}=this.props;
        return (
            <div>
                <div className="alert alert-primary">
                    <span className="badge badge-info">{product.name}</span>
                    <hr />
                    <p>{product.price}</p>
                </div>

            </div>
        );
    }
}

export default Product;