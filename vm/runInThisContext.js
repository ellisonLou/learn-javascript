const vm = require('vm');
var localVar = 'initial value';  // it is scope.localVar

const vmResult = vm.runInThisContext('localVar = "vm"');  // it changes global.localVar
console.log('vmResult: ', vmResult);
console.log('localVar: ', localVar);

console.log('global.localVar: ', global.localVar);

const evalResult = eval('localVar = "eval"');
console.log('evalResult: ', evalResult);
console.log('localVar: ', localVar);