import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListTopic from './ListTopic';
import ListComment from './ListComment';

class App extends Component {
  render() {

    let topics=[
      'java',
      'php',
      'js',
      'c++'
    ];

    let comments=[
      'sweet',
      'web design',
      'client side',
      'ai'
    ];
    return (
     <div className="container">
       <ListTopic topics={topics}/>
       <ListComment comments={comments} />
     </div>
     
    );
  }
}

function test(){

}


export default App;
