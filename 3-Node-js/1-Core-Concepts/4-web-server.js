


// HTTP-server

const http = require('http');
const fs = require('fs');
const httpServer = http.createServer();   // EventEmitter

httpServer.on('request', (req, res) => {

    console.log('Handling New Req Event - begin');

    //--------------------------------------------------------
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write("Hello World !");
    // res.end();
    //--------------------------------------------------------

    //non-blocking IO

    // console.log('IO-begin for Request..');
    // fs.readFile('./PPT/all-levels node.pdf', function (err, data) {
    //     console.log('callback running, after IO');
    //     res.writeHead(200, { 'Content-Type': 'application/pdf' });
    //     res.write(data);
    //     res.end()
    //     console.log('Handling Req Event - finished');
    // });
    // console.log('server back to take next Request..');

    //--------------------------------------------------------

    // Stream based NON-Blocking IO

    /*

        types of streams

            1. readable stream ( e.g request , file )
            2. writable stream ( e.g response, files)
            3. duplex  ( e.g socket )

    */

    // const rs = fs.createReadStream('./PPT/all-levels node.pdf'); // stream opened..
    // res.writeHead(200, { 'Content-Type': 'application/pdf' });
    // rs.on('data', function (chunk) {
    //     console.log('new data/chunk event..');
    //     res.write(chunk);
    // })
    // rs.on('close', function () {
    //     console.log('close event..');
    //     res.end();
    // });


    //--------------------------------------------------------


    // Heavy computational logic

    let i = 0;
    while (i < 100000) {
        console.log(i);
        i++
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("big-number : " + i);
    res.end();



});

httpServer.listen(8080, () => {
    console.log(`server listening at http://localhost:8080, with PID ${process.pid}`);
});
