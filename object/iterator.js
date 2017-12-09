var myArr = [ 1,2,3 ]
var it = myArr[Symbol.iterator]();  // 利用数组的@@iterator手动遍历数组

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());  // es6 发生器类似

var t = {a: 1, b:2}
for(var i in t) {
    console.log(i);
}

var t = [1, 2, 3]
for(var i of t) {
    console.log(i);
}


