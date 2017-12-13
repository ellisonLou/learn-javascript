var after = function (times, func) {
    return function () {
        if (--times < 1) {
            return func.apply(this, arguments)
        }
    }
}

var test = function () {
    console.log('hello world---->');
}

var newTest = after(3, test);
newTest();
newTest();
newTest();
newTest();
