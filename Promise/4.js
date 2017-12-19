function Promise(fn) {
    var doneCallback;
    
    this.then = function(done) {
        doneCallback = done;
    }

    function resolve() {
        console.log('hello world');
        doneCallback()
    }

    fn(resolve)
}

var handler = function() {
    console.log('this is promise');
}
// 这里是最初级的promise, 任何功能都不带。
// 1. .then的作用： .then 实际上把handler传递给了doneCallback
// 2. 这里的resolve的作用实际上是调用了promise内部的函数，这个函数实际上执行的是 doneCallback
// 分析一下，也就是说，一旦一个promise链开始，那么，它的所有.then的回调函数都已经被存到promise库里面了，其实就是在里面等待执行
new Promise(function(resolve) {
    setTimeout(function() {
        resolve()
    }, 1000)
})
.then(handler.bind(this))
