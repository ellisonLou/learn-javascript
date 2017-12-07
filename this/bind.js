// bind 传递的第一个参数，对应函数中的this
// bind 传递的后面的参数可以通过函数对应的参数一一获取
// 也可以通过每个function 内建的arguments来获取。

var a = function(cb) {
    cb('hello')
}

var cb = function(a1) {
    console.log('this--->', this);  // {hello: 1}
    console.log('11', a1);  // hello
    console.log('args====>', arguments); // { '0': 'hello' }
}
a(cb.bind({hello: 1}));  // 这里可以把cb的参数和{hello: 1}一起传到cb中