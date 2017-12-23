new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('hello ');
        resolve()
    }, 100)
})
.then(function() {
    new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('this ');
            resolve();
        }, 0)
    })
    .then(function() {
        console.log('world');
    })
})
.then(function() {
    console.log('11111');
})