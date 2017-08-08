for (var i=0; i<3; i++) {
  console.log('i: ', i)  //瞬间执行，没有任何问题
}

for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log('i-->', i);  //延后执行，全部是3
  }, 1000)
}

for (var i=0; i<3; i++) {
  (function(i){  
    setTimeout(function(){
      console.log('i::', i);  //i 是内部方法setTimeout持有的外部自执行函数的引用， 采用了闭包，防止i丢失
    }, 1000)
  })(i)
}

for (var i=0; i<3; i++) {
  (function(){
    setTimeout(function() {
      console.log('i==>', i);  // 没有外部变量的引用，全部是3
    }, 1000)
  })(i)
}