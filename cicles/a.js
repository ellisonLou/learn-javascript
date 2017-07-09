console.log('a starting');

exports.done = false
module.exports.done2 = true
console.log('hello');
const b = require('./b'); //a执行到这里的时候，exports里面的数据是{done: false}
console.log('world');
console.log('in a, b.done = %j', b.done);

exports.done = true


console.log('a done');