function *foo() {
    var x = 1 + (yield "foo");
    console.log(x);
}

var generator = foo();

console.log(generator.next());
console.log(generator.next());