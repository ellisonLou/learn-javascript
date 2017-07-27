setTimeout(function() {
  console.log(1)
});

new Promise(function executor(resolve) {  //目前还不懂这里的原理
  console.log(2);
  for (var i=0; i<10000; i++) {
    i == 9999 && resolve()
  }
  console.log(3);
}).then(function() {
  console.log(4);
});

console.log(5);