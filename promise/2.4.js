var handler = function (result) {
  console.log(result);
}

Promise.resolve('foo').then(function () {
  return Promise.resolve('bar')
}).then(handler)

