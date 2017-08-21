const EventEmitter = require('events');

let emitter = new EventEmitter()

emitter.on('hello', () => {
    console.log('world');
    emitter.on('hello', () => {})
})

emitter.emit('hello');


//这样不会造成死循环