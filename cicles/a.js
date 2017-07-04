console.log('a starting');

exports.done = false
console.log('hello');
const b = require('./b');
console.log('world');
console.log('in a, b.done = %j', b.done);

exports.done = true

console.log('a done');