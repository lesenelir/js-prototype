/**
 *  函数的prototype属性：
 *    1. 每一个函数都有一个prototype属性，默认指向一个Object空对象（原型对象：Fun.prototype）
 *    2. 原型对象(Fun.prototype)有一个属性constructor，它指向函数对象
 *
 *  给原型对象添加方法：
 *    作用：函数的所有实例对象(new出来)自动拥有原型中的属性
 *
  */

console.log(Date.prototype, typeof Date.prototype)  // Date原型对象


function Fun() {

}

console.log(Fun.prototype) // Fun.prototype 指代Fun函数的原型对象

// 原型对象中的constructor方法指代函数对象
console.log(Fun.prototype.constructor === Fun) // true

Fun.prototype.test = function () { // 给原型对象添加属性方法 => 实例对象可以访问
  console.log("Fun test")
}

// 创建实例对象
let f = new Fun()
f.test()  // 通过实例调用实例的方法

