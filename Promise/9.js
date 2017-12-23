function Promise(fn) {
    var promises = this,
        value = null;
    promises._doneCallBacks = [];
    promises._status = 'PENDING';
    
    this.then = function(fulFill) {
        return new Promise(function(resolve) {
            var handle = function(value) {
                var ret = typeof fulFill === 'function' && fulFill(value) || value;
                resolve(ret);
            }
            if(promises._status === 'PENDING') {
                promises._doneCallBacks.push(handle);  // 这个promises是上一个promises对象，而不是现在这个对象
            }
            // } else if (promises._status === 'FULFILLED') {
            //     var ret = typeof fulFill === 'function' && fulFill(value) || value;
            //     resolve(ret);
            // }
        })
    }

    function resolve(value) {
        setTimeout(function() {
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
    this.a = 'fuck'
})
.then(function(res) {
    console.log('hello world 222222222', res);
    return 'result of first .then'
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