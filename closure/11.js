function f1() {
    var n = 999;
    nAdd = function () { n += 1 }
    function f2() {
        n++;
        console.log(n);
    }
    return f2;
}

(function() {
    var result = f1();
    result();
    nAdd()
    result();
})()

// var result1 = f1();
// nAdd();
// result1();


// var result2 = f1();
// result2();