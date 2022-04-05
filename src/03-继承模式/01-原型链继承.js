/**
 *  原型链继承方法：
 *    1.  定义父类型构造函数
 *    2.  给父类型的原型添加方法
 *    3.  定义子类型构造函数
 *    4.  创建父类型的对象赋值给子类型的原型
 *    5.  将子类型原型的构造属性设置为子类型
 *    6.  给子类型的原型添加方法
 *    7.  创建子类型对象：可以调用父类型的方法
 *
 *  关键：
 *    子类型的原型为父类型的一个实例对象
 *
 */

// 父类型
function Animal() {
  this.animalName = "Animal"
}

Animal.prototype.showAnimal = function () {
  console.log(this.animalName)
}

// 子类型
function Dog() {
  this.dogName = "Dog"
}

// 子类型的原型为父类型的一个实例对象
// Dog.prototype = new Animal()
// Dog.prototype.__proto__ = Animal.prototype
// console.log(Dog.prototype.constructor)
//
// Dog.prototype.showDog = function () {
//   console.log(this.dogName)
// }
//
// let dog1 = new Dog()
// dog1.showDog()


// 子类原型指向父类的一个实例对象
Dog.prototype = new Animal()
console.log(Dog.prototype.__proto__)

let dog1 = new Dog()
dog1.showAnimal()

console.log(Dog.prototype.constructor) // Animal 此时会修改子类原型对象的构造函数指向
Dog.prototype.constructor = Dog // 重新修改


