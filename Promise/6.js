function Promise(fn) {
    var doneList = [];
    
    this.then = function(done, fail) {
        doneList.push(done);
        return this;  // 这是链式操作的关键
    }

    function resolve(value) {
        setTimeout(function() {
            console.log('doneList--->', doneList);
            doneList.forEach(function(call) {
                call(value);
            });
        }, 0)
    }

    fn(resolve)
}
// 如果我们在Promise里面传入的不是异步的方法怎么办？
// 可以看到，这里的resolve()先在.then之前执行，那么这个时候.then的回调还没有被注册进去，所以.then调用不到
// .then注册的方法，怎么办呢？
// 解决方法就是在resolve方法里面包上setTimeout方法，那么这个时候，只有在所有.then 执行完了之后
new Promise(function(resolve) {
    console.log('hello world....');
    resolve();
})
.then(function() {
    console.log('hello world 222222222');
})
.then(function() {
    console.log('hello world 3333333333');
})
.then(function() {
    console.log('hello world 44444444444')
})