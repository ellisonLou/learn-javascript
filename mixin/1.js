function mixin(sourceObj, targetObj) {
    for(var key in sourceObj) {
        if (!targetObj[key]) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}

var Vehiche = {
    engines: 1,
    drive: function() {
        this.ignition();
        console.log('Steering and move forward');
    },
    ignition: function() {
        console.log('Truning engines on');
    }
}

var Car = mixin( Vehiche, {
    wheel: 4,
    drive: function() {
        Vehiche.drive.call( this );
        console.log('Rolling on all' + this.wheel + 'wheels');
    },
} )

Car.drive();