console.log('main starting');

const a = require('./a.js');

const b = require('./b.js');
const c = require('./b.js'); //无论require多少遍，b.js的代码只会执行一遍
const d = require('./b.js')

console.log('in main, b.done=%j', b.done);