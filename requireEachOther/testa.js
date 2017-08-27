console.log('a starting');

exports.done = false;

const testb = require('./testb.js');

console.log('in testa.js, b.done = %j', b.done);

exports.done = true;

console.log('a done');