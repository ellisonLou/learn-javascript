exports.a = 11
exports.add = function() {
    console.log('111');
}

console.log('exports: ', exports);

console.log('module.exports: ', module.exports)

exports.remove = function() {}

console.log('exports.remove: ', exports);

exports = {
    a: 15
}

console.log('exports change a: ', exports);
console.log('module.exports: ', module.exports);