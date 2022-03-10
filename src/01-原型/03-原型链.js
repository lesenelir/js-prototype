/*
*   原型链：
*     1. 访问一个的对象的属性时：
*         先在自身的属性中查找，找到返回 => 如果没有找到，沿着__proto__链找，找到返回 => 如果最终没有找到，返回undefined
*     2. 别名： 隐式原型链
*     3. 作用： 查找对象的属性（不设置属性值）
*     4. 实例对象的隐式原型 = 构造函数的显式原型
*     5. 方法一般定义在原型中，属性一般通过构造方法定义在对象本身
* */

console.log(Object.prototype)
console.log(Object.prototype.__proto__)

function Fn() {
  this.test1 = function () {
    console.log("test1")
  }
}

console.log(Fn.prototype)
Fn.prototype.test2 = function () {
  console.log("test2")
}

let fn = new Fn()
fn.test1()   // 调用自身的方法
fn.__proto__.test2()
fn.test2()   // 调用__proto__ 隐式属性的方法
Fn.prototype.test2()
console.log(fn.__proto__.test2() === fn.test2())  // true
console.log(fn.toString())


/*
*   总结：
*     1. 函数的显式原型指向的对象默认是空Object实例对象（除Object）
*     2. 所有函数都是Function的实例（）
*     3. Object原型对象是原型链的尽头
* */

console.log(Fn.prototype instanceof Object)
console.log(Object.prototype instanceof Object)
console.log(Function.prototype instanceof Object)

console.log(Function.__proto__ === Function.prototype)

console.log(Object.prototype.__proto__)
