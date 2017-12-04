function identify() {
    return this.name.toUpperCase();  // this提供一种更加优雅的方式来隐式传递一个引用，可以将Api设计的更加简洁并且易于复用
}

function speak() {
    var greeting = "Hello , I'm " + identify.call( this );
    console.log( greeting );
}

var me = {
    name: "Kyle"
}

var you = {
    name: "Reader"
}

identify.call( me );
identify.call( you );

speak.call( me );
speak.call( you );
