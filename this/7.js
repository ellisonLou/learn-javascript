var bind = function(fn, obj) {
    return function() {
        return fn.apply(obj, arguments);
    }
}

function a(argu1) {
    console.log(this);
    console.log('arg1--->', argu1);
}

a.bind({hello: 1})('world');