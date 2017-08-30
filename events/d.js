//这里验证是否异步代码一定比同步代码延后执行

setImmediate(() => {
  console.log('this function is async'); //永远不会输出，证明异步代码永远在同步代码后面被执行
})

var i=0;
for(var i=0; i<99999999; i++) {
  i=i-1;
}
console.log(i);