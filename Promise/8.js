function Promise(fn) {
    var promises = this,
        value = null;
    promises._doneCallBacks = [];
    promises._status = 'PENDING';
    
    this.then = function(fulFill) {
        if(promises._status === 'PENDING') {
            promises._doneCallBacks.push(fulFill);
            return this;  // 这是链式操作的关键
        }
        fulFill(value);  // 如果不是PENDING状态，直接执行.then的回调，用之前的value
        return this;
    }

    function resolve(value) {
        setTimeout(function() {
            promises._status = 'FULFILLED'
            promises._doneCallBacks.forEach(function(call) {
                value = call(value);  // 实现值得传递
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
    resolve('hahah');
})
.then(function(res) {
    console.log('hello world 222222222', res);
    
    setTimeout(function() {
        console.log('in setTimeout=====>');
        return 'result of first .then'
    }, 1000)
})
.then(function(res) {
    console.log('hello world 3333333333', res);
    return 'result of second .then'
})
.then(function(res) {
    console.log('hello world 44444444444', res)
})

// 这里的缺点就是： 一旦我们的promise链执行完了以后，就不能再次接上，实际上这个promise已经被fulfill掉了。那么它的状态就是
// 已经固定了。