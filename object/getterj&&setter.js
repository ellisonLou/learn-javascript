var myObj = {
    get a() {
        console.log('in getter');
        return this._a_;
    },
    set a(val) {
        console.log('in setter');
        this._a_ = val;
    }
}

console.log(myObj.a);
myObj.a = 10;
console.log(myObj.a);