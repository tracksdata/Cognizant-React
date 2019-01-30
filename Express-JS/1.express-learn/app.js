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

/*
app.get("/",(req,resp)=>{
 var blocks = ['Fixed', 'Movable', 'Rotating'];
  resp.send(blocks);
})

*/


app.get("/todos",(req,resp)=>{
    var todos = ['Eat', 'Sleep', 'Work'];
     //resp.send(todos);
     resp.json(todos);
   })

   app.get("/search",(req,resp)=>{
    console.log('-- Old Path: '+req.path);
    resp.redirect('/new-path');
    })

    app.get("/new-path'",(req,resp)=>{
    console.log('-- New Path: '+req.path);
   // resp.send('htp://www.good.com');
     })


     /*
app.get("/users",(req,resp)=>{

    var str=`
    <div>
    <h1> Welcome </h1>
    </div>
    `
    resp.send(str);
  })
/*
  app.get("/products",(req,resp)=>{

    var prod={
        id:1024,
        name:'Pen',
        price:6664
    }
  
    resp.send(prod);
  })

const fs=require('fs');
 
/*
  app.get("/",(req,resp)=>{
      resp.writeHead(200,{'Content-Type':'text/html'})
      fs.readFile('./public/index.html',(err,data)=>{
          resp.write(data);
          resp.end();
      })
   
   })
   */

 /*
   app.get("/",(req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'})
    let stream=fs.createReadStream('./public/index.html');
    
    stream.on('data',(chunk)=>{
        resp.write(chunk);
    })
    stream.on('end',()=>{
        resp.end();
    })

    })
 
    */

   app.use(express.static('public'));

   app.use('/users',(req,resp,next)=>{
    console.log('---- Validation ')
    next();
})
app.use('/users',(req,resp,next)=>{
    console.log('---- Auth ')
    next();
})

app.use('/users',(req,resp,next)=>{
    console.log('---- Parsing ')
    next();
})

app.get('/todos',(req,resp)=>{
    let todos=['Eat','Sleep','Work'];
    // lad data from Mongo DB
    resp.send(todos);
})
app.use("/users",(req,resp,next)=>{
    resp.send('Data');
})


   // app.get("/",(req,resp)=>{
   // resp.sendFile(__dirname + '/public/index.html').filter();
   // })

app.listen(3000,()=>{
console.log('server started on http://localhost:3000/')
})




