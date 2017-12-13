function outer() {
    var largeObject = Array(1e7).fill("some string");

    return function() {

        console.log(largeObject[0]);
        console.log('inner');
    };
}

let used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);
var inner = outer()
used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} MB`);
// inner = null;
gc();


setInterval(function(){
    used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses approximately ${used} MB`);
}, 2000);