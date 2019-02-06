import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';

class App extends Component {


  render() {

    return (
      <div className="container">

        <div className="card">
          <div className="card-header bg-primary">Product APP</div>
          <div className="card-body">
            <Products  />
          </div>

        </div>

      </div>
    );
  }
}

export default App;
