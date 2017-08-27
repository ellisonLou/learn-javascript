const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('hello', function() {
    console.log('foo');
})

emitter.on('hello', function() {
    console.log('bar');
})


emitter.emit('hello')

//这里输出foo和bar, 说明事件一旦触发，会在所有的监听的地方收到