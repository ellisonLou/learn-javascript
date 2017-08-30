const EventEmitter = require('events');

let emitter = new EventEmitter()

emitter.on('hello', () => {
    console.log('world');
    emitter.emit('hello');
})

emitter.emit('hello')

//这里会造成死循环