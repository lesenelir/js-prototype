/**
 *  组合继承：（构造函数 + 原型对象）
 *    1. 利用原型链实现对父类型对象的方法继承
 *    2. 通过call()把父类型的this指向子类型的this，实现子类继承父类的属性
 *
 */

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.setName = function (name) {
  this.name = name
}

function Student(name, age, price) {
  Person.call(this, name, age) // 得到属性
  /*this.name = name
  this.age = age*/
  this.price = price
}

// 子类型的原型 = 父类型的实例
Student.prototype = new Person()
// Student.prototype.__proto__ = Person.prototype
// 利用对象形式修改了原型对象，要利用constructor指回原来的原型对象
Student.prototype.constructor = Student // 修正constructor属性
// console.log(Student.prototype.constructor === Student)

Student.prototype.setPrice = function (price) {
  this.price = price
}

let s = new Student('tom', 12, 1000)
s.setName('Tom')
s.setPrice(1999)
console.log(s)


// 总结： call()处理属性；继承处理方法

// call() 可以修改函数运行的this指向
