function foo() {
    setTimeout(()=> {
        console.log(this.a);
    },10)
}

let obj1 = {
    a: 1
}

let obj2 = {
    a: 2
}

let bar = foo.call( obj1 );

bar.call( obj2 );