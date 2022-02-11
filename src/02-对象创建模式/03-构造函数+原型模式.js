/**
 *  构造函数 + 原型 组合模式：
 *    套路：自定义构造函数，属性在函数中初始化，方法添加到原型上
 *    适用场景： 需要创建多个类型相同的对象
 */
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.setName = function (name) {
  this.name = name
}

let p1 = new Person('Tom', 12)
let p2 = new Person('Jack', 24)

