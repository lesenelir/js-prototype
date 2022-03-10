/**
 *  prototype 原型
 *  __proto__ 原型链
 *
 *  从属关系：
 *    prototype 函数的一个属性： 对象{}
 *    __proto__ 对象Object的一个属性： 对象{}  - 只要是一个对象就有__proto__
 *
 *    对象的__proto__保存该对象的构造函数的prototype
 *
 *
 *
 */


function Test() {
  this.a = 1
}

console.log(Test.prototype)
Test.prototype.b = 2


const test = new Test()
console.log(test.__proto__)

console.log(test.__proto__ === Test.prototype)

// Test.prototype.__proto__
console.log(Test.prototype.__proto__)
console.log(Test.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__) //null


// Function Object 函数 对象
console.log(Test.__proto__ === Function.prototype)
// const Test = new Function()

// Test 既是函数也是对象

console.log(Function.__proto__)
console.log(Function.prototype)
console.log(Function.__proto__ === Function.prototype) // 创始人定义


// const obj = {}
// const obj = new Function() // function
console.log(typeof Object) // function Object是一种函数
console.log(Object.__proto__ === Function.prototype)

console.log(Object.__proto__ === Function.__proto__)






