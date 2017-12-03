var func1 = function(cb) {
    cb()
}
global.hello = "world";
// func1(function() {
//     console.log('this-->', this);
// })


var func2 = function() {
    func1(function() {
        // 这个this不是obj的this， 即使这个this是obj调用的，但是它在回调里面，就不和obj产生任何关系
        console.log('this---->', this);  
    })
}

// func2();

fun3 = function() {
    console.log('this3--->', this);
}

var obj = {
    me: 'loutao',
    fun: func2,
    fun1: function() {
        console.log('this2-->', this);
    },
    fun3: fun3,
    fun4: function(cb) {
        console.log('this4-->', this);
        cb();
    }
}

// obj.fun2();

obj.fun4(function() {
    console.log('this.4.2--->', this);  // 这里的这个还是全局的变量
})