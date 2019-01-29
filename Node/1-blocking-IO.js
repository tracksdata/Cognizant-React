



const fs = require('fs'); // commonJS module 

console.log("PID-"+process.pid);

// Blocking IO

// veg-menu.txt
//--------------------------------------------------------
const vegMenu=fs.readFileSync('./veg-menu.txt','UTF8'); // ...........
console.log(vegMenu);
//--------------------------------------------------------


// non-veg-menu.txt
//--------------------------------------------------------
const nonVegMenu=fs.readFileSync('./non-veg-menu.txt','UTF8'); // ...........
console.log(nonVegMenu);
//--------------------------------------------------------


console.log('do something else...');
