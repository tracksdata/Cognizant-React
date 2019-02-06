import React, { Component } from 'react';

class Demo extends Component {
    constructor(props){
        super(props);
    }

    test(){
        console.log('Data: '+this.props.btnLabel);
    }
    render() {
        let {btnLabel}=this.props;
        return (
            <span>
               <button className="btn btn-primary btn-space">{btnLabel}</button> 
            </span>
        );
    }
}

export default Demo;