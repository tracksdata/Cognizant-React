import React, { Component } from 'react';

class Greet extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    testFun(){
      return(
        <div class="alert alert-danger">
        <p>
             <h1>Praveen</h1>
        </p>
    </div>
      );
    }
    render() {
        let {title}=this.props;
        let {product}=this.props;
        return (
           
           <div  className="alert alert-primary">
              <h1>Welcome to {title} </h1>  
            <hr/>
                <h1>{product.name}</h1>
                <p>{product.id}</p>
                <p>{product.price}</p>
                <hr/>
                {this.testFun()}
                
                
           </div>     
            
        );
    }
}

export default Greet;