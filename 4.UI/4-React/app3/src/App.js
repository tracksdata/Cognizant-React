import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Review from './Review';

class App extends Component {
  render() {
    return (
      <div className="container">
         <h2>Welcome to React</h2> <hr/>
         <Product/>
         <Product/>
         <hr/>
         <Review/>
         
      </div>
    );
  }
}

export default App;
