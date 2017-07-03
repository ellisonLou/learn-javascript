// multi level inheritance
// 温故而知新，可以为师矣
function Employee(name) {
    this.name = name;
}

Employee.prototype.getName = function() {
    return this.name
}

function Manager(name) {
    this.name = name;
}



var mgr = new Manager('lucy')
mgr.__proto__.__proto__ = Employee.prototype;
console.log(mgr.getName());