
// 串行promise和 异步结果的传递

function Promise(fn) {
    var promise = this,
        value = null;
        promise._resolves = [];
        promise._status = 'PENDING';

    this.then = function (onFulfilled) {
        return new Promise(function(resolve) {
            function handle(value) {
                var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;
                resolve(ret);
            }
            if (promise._status === 'PENDING') {
                promise._resolves.push(handle);
            } else if(promise._status === FULFILLED){
                handle(value);
            }
        })
        
    };


    function resolve(value) {
        setTimeout(function(){
            promise._status = "FULFILLED";
            promise._resolves.forEach(function (callback) {
                value = callback( value);
            })
        },0);
    }

    fn(resolve);
}

new Promise(function(resolve) {
    console.log('hello world....');
    resolve('hahah');
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