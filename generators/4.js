function *foo(x) {
  console.log('go in......')
  var y = 2 * (yield (x + 1));  // 相当于 yield 返回一个值， 然后函数停止运行，等待下一次next, 将 yield(x+1) 的值传入
  console.log('y:', y);
  var z = yield (y / 3);
  console.log('z: ', z);
  return (x + y + z);
}

var gen = foo(5);
console.log(gen)  // {}
console.log(gen.next())  // { value: 6, done: false }
console.log(gen.next(10))  // { value: 6.666666666666667, done: false }
console.log(gen.next(100))  // { value: 125, done: true }