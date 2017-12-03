var name = "The Window";
var object = {
        name: "My Object",
        getNameFunc: function () {
            console.log('this: ', this);  // 这里的this代表object,因为这个this是由object调用的
            return function () {  // 这里返回的是匿名函数，那么函数的调用就不是object这个对象执行的，那么this调用它的地方的this
                console.log('this2: ', this); // 这个this是由外面来调用的
                return function() {  // 同理，这个函数也是外面函数调用
                    var aa = 1;
                    console.log('this3: ', this);  // 因此，这个this也不是object的this
                    return aa;
                }
                return this.name;
            };
        }
    };
global.hello = "aaaaaaaaaaa"
console.log(object.getNameFunc()()());