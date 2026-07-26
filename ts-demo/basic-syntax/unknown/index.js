"use strict";
let a;
a = 100;
a = true;
a = null;
a = undefined;
a = {};
a = [];
a = function () { };
a = 'hello';
let b;
//b = a//错误
//使用前要进行类型检查
//第一种方法：加类型判断
if (typeof a === 'string') {
    b = a;
    console.log(b);
}
//第二种方法：使用断言
b = a;
//第三种方法：使用类型断言
b = a;
// a.length//“a”的类型为“未知”。
// 解决方法：使用断言
console.log(a.length);
