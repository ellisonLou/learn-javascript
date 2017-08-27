//emitter will pass an this to listener
var EventEmitter = require('events');
const emitter = new EventEmitter()

emitter.on('hello', (a, b) => {
  this.a = 1
  console.log(a);
  console.log(b);
  console.log(this);  //同样的代码，在es6下面的胖箭头运行结果是 this == {}, 这是为啥？
})

emitter.emit('hello', 'yes', 'i can')