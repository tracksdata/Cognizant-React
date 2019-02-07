import React, { Component } from 'react';
import Product from './Product';
import ProductForm from './ProductForm';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 'P001', name: 'Pen', price: 8883 },
                { id: 'P002', name: 'Laptop', price: 438748 },
            ]
        };

    }

    addNewProduct(newProduct) {
        console.log('Dta: '+this.str);
        let { products } = this.state;
        products = products.concat(newProduct);
        this.setState({ products });
    }
    renderProducts() {
        let { products } = this.state;

        return products.map((product, idx) => {
            return (
                <Product product={product} key={idx} />
            )
        })



        //return products;
    }

    render() {
        //  let {storeName}=this.props;
        return (
            <div>
                <ProductForm onFormSubmit={newProduct => this.addNewProduct(newProduct)} />
                {this.renderProducts()}

            </div>
        );
    }
}

export default Products;