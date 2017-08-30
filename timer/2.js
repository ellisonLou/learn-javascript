process.nextTick(function() {
    console.log('延迟执行1');
})
setImmediate(function() {
    console.log('延迟执行 x')
})
setTimeout(function() {
    console.log('延迟执行2');
}, 0)
setImmediate(function() {
    console.log('延迟执行3');
})

console.log('正常执行');