console.log('--- app.js ----');
//--------------------
/*
const httpServer=http.createServer();
httpServer.on('request',(req,resp)=>{
let url=req.url;
let method=req.method;
console.log('--- Hello New Request');
resp.writeHead(200,{'Content-Type':'text/html'});
console.log('URL: '+req.url+" and on "+req.method);

if(url==="/" && method==="GET"){
    resp.write('Saving');
   
    resp.end();
}
if(url==="/" && method==="POST"){

    resp.write('Posting');

    resp.end();
}

if(url==="/products" && method==="GET"){
    
    resp.write('Saving Products');

    resp.end();
}

if(url==="/products/product" && method==="POST"){
    
    resp.write('Saving Products ');

    resp.end();
}


});


httpServer.listen(3000,()=>{
    console.log('server started on 3000 http://localhost:3000');
})
*/

const http=require('http');
const express=require('express');
const app=express();

//app.get("/",(req,resp)=>{
    /*
    resp.writeHead(200,{'Content-Type':'text/html'});
    console.log('--- Express Js Request received')
    resp.write('Hello msg');
    resp.end();
    */
    //-------------
    // or
//    resp.send('--- New Message ');

app.get("/",(req,resp)=>{
 var blocks = ['Fixed', 'Movable', 'Rotating'];
resp.send(blocks);
 
  //resp.send('Express Message');
})

app.get("/users",(req,resp)=>{

    var str=`
    <div>
    <h1> Welcome </h1>
    </div>
    `
    resp.send(str);
  })

  app.get("/products",(req,resp)=>{

    var prod={
        id:1024,
        name:'Pen',
        price:6664
    }
  
    resp.send(prod);
  })

app.listen(3000,()=>{
console.log('server started on http://localhost:3000/')
})




