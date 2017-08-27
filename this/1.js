function foo() {
    console.log(this.a)
}

var obj = {
    a: 2,
    foo: foo
}

obj.foo()
    //输出2
    //调用位置使用obj的上下文来调用foo函数。当函数引用有上下文对象时，隐式绑定会将函数中的this绑定到这个上下文对象。