//emitter will pass an this to listener
var EventEmitter = require('events');
const emitter = new EventEmitter()

emitter.on('hello', function(a, b) {
  console.log(a)
  console.log(b)
  console.log(this);  //this is event object
  // this.emit('hello')  在这边加上emit也会导致call stack size exceeded
})

emitter.emit('hello', 'yes', 'i can')