//显式的any
let a: any
a = 'hello'
a = 100
a = true

//隐式的any
let b
b = 'hello'
b = 100
b = true

// 注意：any类型可以赋值给任何类型，也可以赋值给其他类型的变量。
let c: any
c = 9

let x: string
x = c