var _helper = function(tmp) {
    (function(tmp) {
        setTimeout(function() {
            console.log(tmp);
        }, 1000)
    })(tmp)
    
}

for(var i=0; i<5; i++) {
    var tmp = {value: i};
    _helper(tmp);
}

