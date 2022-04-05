/**
 *  自定义构造函数模式：
 *    套路：通过new创建对象
 *    适用场景：需要创建多个类型确定的对象
 *    问题：每个对象都有相同的数据，浪费内存
 */

function Person(name, age) {
  this.name = name
  this.age = age
  this.setName = function (name) {
    this.name = name
  }
}

let p1 = new Person('Tom', 12)
p1.setName('jack')
console.log(p1.name, p1.age)
console.log(p1 instanceof Person)


function Student(name, price) {
  this.name = name
  this.price = price
}

let s =  new Student('Bob', 1000)
console.log(s instanceof Student)

console.log(Person.__proto__ === Function.prototype)
