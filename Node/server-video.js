const http=require('http');
const fs=require('fs');
const httpServer=http.createServer(); // EventEmiter

httpServer.on('request',(request,response)=>{
    console.log('new request received...');
 //   response.writeHeader(200,{'Content-Type':'text/html'});
  //  response.write('Hello from Node');
   // response.end();
//------------------------
/*fs.readFile('./js.pdf',(err,data)=>{
    response.writeHeader(200,{'Content-Type':'application/pdf'});
    response.write(data);
    response.end();
})
console.log('--- Showing PDF');*/

const readStream=fs.createReadStream('./video1.mp4');

response.writeHeader(200,{'Content-Type':'video/mp4'});
readStream.on('data',(chunk)=>{
    console.log('--- streaming started...')
    response.write(chunk);
    
   
});
readStream.on('end',()=>{
    response.end();
})
});



httpServer.listen(3000,()=>{
    console.log('sever is started on port 3000. utl: http://localhost:3000');
})