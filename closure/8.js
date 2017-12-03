//  let 申明一个块作用域
for(var i=0; i<5; i++) {
    let j = i;  // 闭包的块作用域
    setTimeout(function() {
        console.log('j==>', j);
    }, 1000)
}

// 还可以这样写
// 本质上是可以将一个块转换成一个可以被关闭的作用域。
for(let i=0; i<5; i++) {  // 变量i 在循环中不止被申明一次，每次循环都会申明
    setTimeout(function() {
        console.log('i2--->', i);
    }, 100);
}

var foo = true;
if ( foo ) {
    var bar = foo * 2;
}
console.log('bar==>', bar);