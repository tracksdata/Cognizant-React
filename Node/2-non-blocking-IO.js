

/*


   IO always external to our application

*/


// ref : https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js



const fs = require('fs');

console.log("PID-" + process.pid);

// Non-Blocking IO
const callback = function (err, data) {
    if (err) throw err;
    console.log('--menu--');
    console.log(data.toString('UTF8'));
}

// veg-menu.txt
//--------------------------------------------------------
console.log('reading veg-menu.txt');
fs.readFile('./veg-menu.txt', callback);
//--------------------------------------------------------

// non-veg-menu.txt
//--------------------------------------------------------
console.log('reading non-veg-menu.txt');
fs.readFile('./non-veg-menu.txt', callback);

//--------------------------------------------------------

console.log('do something else...');