const vm = require('vm');

global.globalVar = 0;

const script = new vm.Script('globalVar += 1', { filename: 'myfile1.vm' });

for (var i=1; i<1000; ++i) {
  script.runInThisContext();
}

console.log(globalVar);