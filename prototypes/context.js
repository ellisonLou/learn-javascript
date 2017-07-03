// function foo() {
//     console.log(this)
// }

// foo();  // #1 this is node context


// var obj = {'variable': 'this is a obj variable'}

// obj.bar = function() {
//     console.log(this);
// }

// obj.bar();  // #2 this is obj context


// function Foobar() {
//     this.title = 'new Foobar'
//     console.log(this);
// }

// var a = new Foobar()  // #3 this is the new Obj


function Bicycle(tirePresure) {
    this.tirePresure = tirePresure;
    this.inflateTire = function() {
        this.tirePresure += 3;
    }
}

var bicy1 = new Bicycle(20)

// bicy1.inflateTire()

// console.log(bicy1.tirePresure)

var bicy2 = new Bicycle(30)

// console.log('bicy2: ', bicy2.tirePresure)


function Mechanic(name) {
    this.name = name;
}

var hk = new Mechanic('houkai');

hk.inflateTires = bicy1.inflateTire;

hk.inflateTires.call(bicy2);

console.log('bicy1 : ', bicy1);
console.log('bicy2 : ', bicy2);