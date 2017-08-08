Promise.resolve('foo').then(function () {
  Promise.resolve('bar')
}).then(function (result) {
  console.log(result);
})