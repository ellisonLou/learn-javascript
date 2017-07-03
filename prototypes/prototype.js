function foo() {
    console.log('hello i am foo function');

}

// foo()
console.log('foo prototype: ', foo.prototype);



function bar() {
    console.log('hello this is bar function');
}


var barobj = new bar()

barobj.__proto__.test = "123"

console.log('bar prototype---->', barobj.test);