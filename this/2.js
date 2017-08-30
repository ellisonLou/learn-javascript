function foo() {
    console.log(this.a)
}

var obj2 = {
    a: 42,
    foo: foo
}

var obj = {
    a: 2,
    obj2: obj2
}

obj.obj2.foo()

//输出42
//说明只有上一层的上下文在起作用
//这种情况叫做隐式绑定