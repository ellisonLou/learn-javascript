function foo() {
    return () => {
        //  `this` here is lexically adopted from `foo()`
        //  这里的this采用的foo()被调用时的this
        console.log(this.a);
    }
}

let obj1 = {
    a: 1
}

let obj2 = {
    a:2
}

let bar = foo.call( obj1 );

bar.call( obj2 );