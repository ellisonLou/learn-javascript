javascript基础问题
一. 类型判断
  当我们比较javascript中的两个对象的时候，我们比较的是什么？
  1. == 和 === 到底有什么不同？
    stackoverflow：https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons
    == 和 === 在比较双方都是相同类型的时候，功能是一样的。但是，当比较的双方不是相同的类型的时候，===直接返回false,而==会把比较的双方进行类型转换
    ，转换的规则十分的复杂并且没有规律可循，下面是几个有趣的例子：

  `
  undefined == null         yes
  undefined == undefined    yes
  [1] == [1]                no
  [] == false               yes
  `
  建议使用===而不是==

  2. null 和 undefined有什么不同？
    null特别好理解，它就是一个空对象，因此
    typeof null   //object
    null和undefined最根本的区别在于： null 是一个空object, 而undefined则是一个类型
    当我们定义一个变量，并未赋予其初始值，这个变量为undefined。
    在浏览器里面，undefined是window上的一个属性，在Node中，它是global的一个属性
    例如：
    var a;
    console.log(typeof a) //undefined
    那我们平时使用的时候有什么区别？

  3. 如何编写json对象的拷贝函数？
    1）使用cloneObj = JSON.parse(JSON.stringify(obj))
    这样做的后果是丢失了原本对象的构造函数
    2) ???
  
  4. javascript中浮点数的比较
    0.1 + 0.2 === 0.3 //false
    0.1+0.2的实际结果是0.30000000000000004
    如何在不知道精度的情况下比较两个浮点数？？
`
    function addAcc(p1, p2) {
      var r0, r1, m
      try {r0 = p1.split(.)[1].length} catch (e) {r0=0}
      try {r2 = p2.split(.)[1].length} catch (e) {r1=0}
      m = Math.pow(10, Math.max(r0, r1))
      return ((p1*m + p2*m)/m).toFixed()
    }
`

  5. javascript 中的const let var 的区别是什么
    const Array的值能够被修改，那么const有什么意义？？
    1)精彩回答：
    https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable
      1. var的作用于在于function scope， 而let 的作用于在于 encolsing block, 它比function block更小。
      2. let 不存在变量提升， 而var 存在变量提升
    2)
    const 作用于值类型的时候，是不可改变的，作用于引用类型的时候是可以改变的。
    值类型保存在“栈”， 复合类型（对象，数组）将指向对象的指针保存在栈中，而实际的对象存储在"堆"中
    const保证栈中的值不被改变，所以说值类型不可变，而引用类型指向内存的指针不可变，但是“堆”里的对象可以改变。
    那么const有什么意义呢？？

二. 模块
  1. 当我们在require的时候，javascript到底在干什么？
  官方文档： https://nodejs.org/dist/latest-v6.x/docs/api/modules.html
  2. 两个模块相互引用会造成什么样的后果？设计上如何避免这个问题？
    
  3. module.export 和 exports有什么区别？
  4. 严格模式和非严格模式的区别是什么？
  5. es6中的export 和 import
    export简单用法：