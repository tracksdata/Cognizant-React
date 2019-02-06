import React, { Component } from 'react';

class ProductForm extends Component {

    handleForm(e) {
        e.preventDefault();
        let newProduct = {
            name: this.refs.name.value,
            price: this.refs.price.value
        }
       // console.log(newProduct);

        let {onFormSubmit}=this.props;
        if(onFormSubmit){
            onFormSubmit(newProduct);
        }

    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header bg-primary">Product-Form</div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-6 col-md-6 col-lg-6">

                                <form onSubmit={e => this.handleForm(e)}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" ref="name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="text" className="form-control" ref="price" />
                                    </div>
                                    <button className="btn btn-primary">Submit</button>

                                </form>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default ProductForm;