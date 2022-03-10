var a = 0

var obj = {
  a: 2,
  foo: function () {
    console.log(this) // obj

    function test() {
      console.log(this) // window
    }
    test() // 此处的函数是独立调用 立即


    // 闭包： 当函数执行导致函数被定义，并抛出 （函数作为返回值的函数就是闭包）
    function test2() {
      console.log(this) // window
    }
    return test2

  }
}

obj.foo()() // test2() 此时函数独立调用 this为window



var a1 =0
function foo1() {
  console.log(this) // window
}

function bar1(fn) {
  fn() // 此处独立调用fn所以之前是window
}

var obj1 = {
  a1: 2,
  foo1
}

// 预编译的过程：实参被赋值给形参 （值拷贝的过程，浅拷贝）
bar1(obj1.foo1)









