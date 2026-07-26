let a: object //a的值可以是任何【非原始类型】，包括：对象、函数、数组等

// 将【非原始类型】赋给a，所以均符合要求
a = {}
a = { name: '张三' }
a = [1, 3, 5, 7, 9]
a = function () { }
a = new String('123')
class Person { }
a = new Person()

// // 将【原始类型】赋给a，有警告
// a = 1        // 警告：不能将类型“number”分配给类型“object”
// a = true     // 警告：不能将类型“boolean”分配给类型“object”
// a = '你好'    // 警告：不能将类型“string”分配给类型“object”
// a = null     // 警告：不能将类型“null”分配给类型“object”
// a = undefined// 警告：不能将类型“undefined”分配给类型“object”

let b: Object //b的值必须是Object的实例对象（除去undefined和null的任何值）

// 以下代码，均无警告，因为给b赋的值，都是Object的实例对象
b = {}
b = { name: '张三' }
b = [1, 3, 5, 7, 9]
b = function () { }
b = new String('123')
class Student { }
b = new Student()
b = 1      // 1不是Object的实例对象，但其包装对象是Object的实例
b = true   // true不是Object的实例对象，但其包装对象是Object的实例
b = '你好' // “你好”不是Object的实例对象，但其包装对象是Object的实例

// // 以下代码均有警告
// b = null      // 警告：不能将类型“null”分配给类型“Object”
// b = undefined // 警告：不能将类型“undefined”分配给类型“Object”


//声明对象类型
let person1: { name: string, age: number }
// 必须包含name属性，age属性可选
let person2: { name: string, age?: number }
//也可以表示成
let person3: { name: string; age?: number }
let person4: {
    name: string
    age?: number
}

// 索引签名
let person5: {
    name: string
    age?: number
    [key: string]: any
}
person5 = {
    name: '张三',
    age: 18,
    sex: '男'
}

//声明函数类型
let count: (a: number, b: number) => number
count = (a, b) => {
    return a + b
}

//声明数组类型
let arr1: number[]
let arr2: Array<string>
arr1 = [1, 3, 5, 7, 9]
arr2 = ['1', '3', '5', '7', '9']
