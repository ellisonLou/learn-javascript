// IIFE为什么能创建闭包？

// 函数并不是在它的词法作用域外面执行的
// 所以严格来讲它可以不被成为闭包，也可以被成为闭包，因为它完成了闭包的工作： 

for(var i=0; i<5; i++) {
    (function(i) {
        var j = i;
        setTimeout(function() {
            console.log('j-->', j);
        }, 0)
    })(i)
}

for(var i=0; i<5; i++) {
    var _helper = function(i) {
        setTimeout(function() {
            console.log('i2-->', i);
        }, 0)
    }

    _helper(i);
}

console.log('i3==>', i);
