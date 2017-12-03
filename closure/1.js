// for (var i=0; i<3; i++) {
//   console.log('i: ', i)  //瞬间执行，没有任何问题
// }

// for (var i=0; i<3; i++) {
//   setTimeout(function() {
//     console.log('i-->', i);  //延后执行，全部是3
//   }, 1000)
// }


// var _helper = function(i) {
//   console.log('i-->', i);
//   setTimeout(function() {
//     console.log('i:  ', i);
//   }, 1000)
// }
var _helper = function(i) {
  var k = i;
  return function() {
    setTimeout(function(){
      console.log('i: ', i);
    }, 1000);
  }
}
var _helper2 = function(i) {
  console.log('i out==>', i);
  setTimeout(function() {  // 这里的function是回调函数，相当于重新创建了新的执行环境
    // 根据闭包的执行原理，在外部重新创建执行环境，引用内部变量的话，这就形成了闭包。
    console.log('i--->', i);
  }, 1000);
}
// for (var i=0; i<3; i++) {
//   // (function(i){  
//   //   setTimeout(function(){
//   //     console.log('i::', i);  //i 是内部方法setTimeout持有的外部自执行函数的引用， 采用了闭包，防止i丢失
//   //   }, 1000)
//   // })(i)
//   _helper2(i);
// }

for(var j=0; j<3; j++) {
  setTimeout(function() {
    console.log('this==>', this);
    // console.log('i 22-->', i);
  }, 1000);
}

// for (var i=0; i<3; i++) {
//   (function(){
//     setTimeout(function() {
//       console.log('i==>', i);  // 没有外部变量的引用，全部是3
//     }, 1000)
//   })(i)
// }