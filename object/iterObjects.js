var myObject = {
    a: 1,
    b: 2,
    [Symbol.iterator]: function() {
        var keys = Object.keys(this);
        var index = 0;
        var o = this;
        return {
            next: function() {
                return {
                    value: o[keys[index++]],
                    done: (index > keys.length)
                }
            }
        }
    }
}

var it = myObject[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());

for(var a of myObject) {
    console.log(a);
}
