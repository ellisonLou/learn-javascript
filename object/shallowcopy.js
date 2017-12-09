function anotherFun() {  /**/ }

var anotherObj = {
    c: true
}

var anotherArr = []

var myObject= {
    a: 2,
    b: anotherObj,  // reference
    c: anotherArr,  // reference
    d: anotherFun
}

anotherArr.push( anotherObj, myObject );
