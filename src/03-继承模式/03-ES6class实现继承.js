/**
 *  ES6 class 实现继承
 *
 */

class Person {
  constructor(name) {
    this.name = name
  }

  drink() {
    console.log("喝水")
  }
}


class Student extends Person {
  constructor(name, score) {
    // 调用super 实质是执行了父类的构造函数
    super(name)
    this.score = score
  }

  introduce() {
    console.log(`我是${this.name}，考了${this.score}分`)
  }
}


class Teacher extends Person {
  constructor(name, subject) {
    super(name)
    this.subject = subject
  }

  teach() {
    console.log(`我是${this.name}，教${this.subject}课程`)
  }
}


const student = new Student('张三', 99)
student.introduce()
student.drink()

const teacher = new Teacher('李四', 'web develop')
teacher.teach()
teacher.drink()
