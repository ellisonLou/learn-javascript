console.log('b starting');

exports.done = false

const a = require('./a'); //这里虽然require a, 但是a还没有执行完，所以是{}

console.log('a is : ', a);

console.log('in b, a.done = %j', a.done);

exports.done = true

console.log('b done');