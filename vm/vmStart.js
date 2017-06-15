const vm = require('vm');
const util = require('util');

// 用于绑定到context对象
const sandbox = {
  animal: 'cat',
  count: 2
}

// 编译需要执行的代码
const script = new vm.Script('count += 1; name = "kitty"')

// 创建一个context对象，把sandbox绑定到这个环境，作为全局对象（其实相当于一个沙盒）
const context = new vm.createContext(sandbox)

for (var i=1; i<10; ++i) {
  // 在沙盒中运行代码
  script.runInContext(context)
}

console.log(util.inspect(sandbox));

console.log(sandbox);


