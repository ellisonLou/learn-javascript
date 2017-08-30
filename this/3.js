//简单实现一个硬绑定函数


function foo() {
    console.log(this.a, something);
    return this.a + something;
}

function bind() {
    return function() {
        return fn.apply(obj, arguments)
    }
}

var obj = {
    a: 2
}

var bar = bind(foo, obj) //返回一个硬编码的函数，将foo的上下文变成obj

var b = bar(3);
console.log(b); //5

//那么这里的bind和apply、call有什么区别呢？？