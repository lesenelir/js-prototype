/**
 *  显式原型：每一个函数都有一个prototype属性
 *  隐式原型：每一个实例对象都有一个__proto__属性
 *
 *  对象隐式原型的值 = 其对应构造函数的显式原型的值
 *
 *  总结：
 *    1. 函数的prototype属性：定义函数时自动添加，默认值是一个空Object对象
 *    2. 对象的__proto__属性：创建对象时自动添加，默认值是构造函数的prototype的值（Fun.prototype）
 *    3. 实例对象先找自身的属性；找不到去构造函数的原型对象中找
 *    4. 开发者可以直接操作显式原型，但不能直接操作隐式原型（ES6之前）
 *    5. 实例对象的隐式原型 = 构造函数的显式原型    【重要】
 */

// 定义构造函数
function Fn() {
  // 内部语句：this.prototype = {}
}

console.log(Fn.prototype) // 每一个函数都有一个prototype属性，即显式原型属性，默认指向一个空Object对象
console.log(Fn.prototype.constructor === Fn)

let fn = new Fn()
console.log(fn.__proto__) // 实例对象的隐式原型
console.log(fn.__proto__ === Fn.prototype) // 实例对象的隐式原型的值 = 构造函数的显式原型的值

// 给原型添加方法
Fn.prototype.test = function () {
  console.log("Fn test")
}

fn.test()

console.log(fn.__proto__ === Fn.prototype)  // 都指向一片新的内存区域（空对象）
