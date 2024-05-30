const EventEmitter = require('events');

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on('foo', () => {
    console.log('Event occured');
})

// with use of once method it occurs only once irrespective how many times event emits
myE.once('bar', () =>{
    console.log('bar event occured');
})

myE.emit('foo');
myE.emit('foo');
myE.emit('foo');
myE.emit('foo');
myE.emit('foo'); 

myE.emit('bar')
myE.emit('bar')
myE.emit('bar')
myE.emit('bar')





