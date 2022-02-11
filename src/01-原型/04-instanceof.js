/**
 *  instanceof方法：
 *    1. 表达式 A instanceof B
 *    2. 判断 对象A是不是函数B的实例
 *    3. 如果B函数的显式原型对象在A的对象的原型链(__proto__查找)上，则返回true
 *    4. 函数的原型对象默认是一个Object空对象（原型对象也是对象，是Object的实例）
 */

function Foo() {

}

let foo = new Foo()
console.log(foo instanceof Foo)
console.log(foo instanceof Object)

console.log(Object instanceof Function)
console.log(Object instanceof Object)
console.log(Function instanceof Function)
console.log(Function instanceof Object)
