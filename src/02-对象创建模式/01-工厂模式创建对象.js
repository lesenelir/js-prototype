/**
 *  通过工厂模式动态创建对象并返回
 *    适用场景： 需要创建多个对象
 *    问题： 对象没有一个具体的类型，都是Object类型
 *    好处： 节省代码
 */

// 工厂函数： 返回一个对象的函数
function createPerson(name, age) {
  let obj = {
    name,
    age,
    setName(name) {
      this.name = name
    },
    getName() {
      return this.name
    }
  }
  return obj
}

let p1 = new createPerson('Tom', 12)
console.log(p1)
console.log(p1.getName())

