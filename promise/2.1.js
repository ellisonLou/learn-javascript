// Promise = require('bluebird');

Promise.resolve('foo').then(Promise.resolve('bar')).then(function (result) {
  console.log('result: ', result);
})  //第二个Promise.resolve('bar')没有包裹在function, 相当于null

Promise.resolve('foo').then(null).then(function (result) {
  console.log('result: ', result);
})