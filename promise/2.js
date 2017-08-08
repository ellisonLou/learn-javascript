// 这四中promise有什么区别？
doSomeThing().then(function () {
  return doSomeThingElse();
})

doSomeThing().then(function () {
  doSomeThingElse()
})

doSomeThing().then(doSomeThingElse())

doSomeThing().then(doSomeThingElse)