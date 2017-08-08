const util = require('util');
const vm = require('vm');

const script = new vm.Script(' globalVar = "set" ');

const sandbox = [{}, {}, {}];
sandbox.forEach((s) => {
  script.runInNewContext(s)
})

console.log(util.inspect(sandbox));