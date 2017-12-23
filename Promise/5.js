// 可以看出，4.js只能进行一次.then,我们要在上面加上链式的操作
// 也就是可以无限的.then .then

function Promise(fn) {
    var doneList = [];
    
    this.then = function(done, fail) {
        doneList.push(done);
        return this;  // 这是链式操作的关键
    }

    function resolve(value) {
        doneList.forEach(function(call) {
            call(value);
        });
    }

    fn(resolve)
}

var promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        console.log('in settimeout....');
        resolve('hello world')
    }, 1000)
});
promise1.then(function(res) {
    console.log('what is res--->', res);
    console.log('.then callback function...');
})
.then(function() {
    console.log('1111111111111111');
})
.then(function() {
    console.log('2222222222222222');
})

