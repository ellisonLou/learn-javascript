let doSth = new Promise(function (resolve, reject) {
  console.log('hello');
  resolve();
});

setTimeout(function () {
  doSth.then(function () {
    console.log('over');
  })
}, 10000)