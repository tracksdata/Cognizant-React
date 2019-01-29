

/*
    Event-Driven Model
    -----------------------

    All objects that emit events are instances of the EventEmitter class.

*/

const EventEmitter = require('events').EventEmitter;


//--------------------------------------------------------
// let ee = new EventEmitter();
// ee.on('some-event', function () {
//     console.log('handling some-event...');
// })

// ee.emit('some-event');
// ee.emit('some-event');

//--------------------------------------------------------
// Door-Module
//--------------------------------------------------------

class Door extends EventEmitter {
    open() {
        console.log('door opened....');
        this.emit('open', { num: 302, floor: 3 });
    }
    close() {
        console.log('door closed...');
        this.emit('close', { num: 302, floor: 3 });
    }
}
const door = new Door();


//--------------------------------------------------------
// Light Module
//--------------------------------------------------------

const light = {
    setUp: function () {
        door.on('open', (e) => {
            console.log('Light ON...' + e.num + "- " + e.floor);
        })
        door.on('close', (e) => {
            console.log('Light OFF...' + e.num + "- " + e.floor);
        })
    }
};
light.setUp();

//--------------------------------------------------------
// AC Module
//--------------------------------------------------------

const AC = {
    setUp: function () {
        door.on('open', (e) => {
            console.log('AC ON...' + e.num + "- " + e.floor);
        })
        door.on('close', (e) => {
            console.log('AC OFF...' + e.num + "- " + e.floor);
        })
    }
};
AC.setUp();

//--------------------------------------------------------


setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close();
    }, 5000)
}, 5000);


//--------------------------------------------------------