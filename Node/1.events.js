const EventEmitter = require('events').EventEmitter;

let ee=new EventEmitter();
ee.on('onRead',(e)=>{
console.log('--- Hello  '+e.name);
})

ee.on('onWrite',(e)=>{
    console.log('--- Hello  '+e.name);
    })

let ee1=new EventEmitter();
ee1.on('onWrite',(e)=>{
console.log('--- Hello  '+e.name);
})


ee.emit('onRead',{name:'James'});
ee.emit('onWrite',{name:'Abc'});

