let a: string
let b: number
let c: boolean

a = 'hello'
b = 100
c = true

function demo(x: number, y: number): number {
    return x + y
}

let str1: string
str1 = 'hello'
// str1=new String('hello')//报错

let str2: String
str2 = 'hello'
str2 = new String('hello')

//字面量类型
let d: 'hello'
d = 'hello'//只能是hello
// d='world'

//类型推断
let e = 'hello'
// e = 100//报错
