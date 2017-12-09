var myObject = {
    a: 1
}

myObject.a = 2

Object.defineProperty(myObject, 'a', {
    value: 3,
    writeable: true,  // a value can be redefine
    configurable: false,  // a property can not be redefine
    enumberable: true  // 这个对象的a属性可以用for in 迭代出来
})

console.log(myObject)

Object.defineProperty(myObject, 'a', {
    value: 4,
    writeable: true,
    configurable: true,
    enumerable: false
})