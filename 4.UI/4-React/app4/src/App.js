import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

class App extends Component {
  render() {
    let product={
      id:'P001',
      name:'Book',
      price:777447
    }
    return (
      <div className="container">

      <div className="alert alert-info">
     <Greet title="Face-Book" product={product}/>
      </div>

      </div>
    );
  }
}

export default App;
