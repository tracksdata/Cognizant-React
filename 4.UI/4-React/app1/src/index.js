import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';


/* 
// plan js code
let jsClock=document.querySelector("#js-clock");

function jsTick(){
    let time=new Date().toLocaleTimeString();
    let ui=`
    <div class="alert alert-indf">
       <span class="badge badge-danger"> ${time} </span>
    </div>
    `
    jsClock.innerHTML=ui;
}
setInterval(jsTick,1000)
// with React
let reactClock=document.querySelector("#react-clock");
function reactTick(){
    let time=new Date().toLocaleTimeString();
    let ui=
    <div class="alert alert-indf">
       <span class="badge badge-success"> {time} </span>
    </div>

    ReactDom.render(ui,reactClock);
}
setInterval(reactTick,1000) */
let myroot=document.querySelector("#root");
//ReactDom.render(App,myroot);