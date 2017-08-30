var EventEmitter = require('events');
const emitter = new EventEmitter()

emitter.on('hello', function(a, b) {  //这里的listener首先注册，但是被异步延后执行，只要是异步，就一定比同步代码延后执行码？
  setImmediate(() => {
    console.log('this happened asynchroously');
  });
})

emitter.on('hello', function(a, b) {
  console.log('first print this');
})

emitter.emit('hello', 'yes', 'i can')