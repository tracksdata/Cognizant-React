import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';

class App extends Component {
  render() {
   
    return (
      <div className="container">
        <Demo btnLabel="Add"/>
        <Demo btnLabel="Display"/>
        <Demo btnLabel="Save" />
        <Demo btnLabel="Update"/>
      </div>
    );
  }
}

export default App;
