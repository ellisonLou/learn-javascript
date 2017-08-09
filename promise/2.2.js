Promise.resolve('foo').then(function () {
  return Promise.resolve('bar')
}).then(function (result) {
  console.log(result);
})