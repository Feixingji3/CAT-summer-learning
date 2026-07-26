// let a: never 
//错误的赋值
// a= 100
// a= 'hello'
// a= true
// a= null
// 指定a的类型为string
let a;
// 给a设置一个值
a = 'hello';
if (typeof a === 'string') {
    console.log(a.toUpperCase());
}
else {
    console.log(a); // TypeScript会推断出此处的a是never，因为没有任何一个值符合此处的逻辑
}
// 限制throwError函数不需要有任何返回值，任何值都不行，像undefined、null都不行
function throwError(str) {
    throw new Error('程序异常退出:' + str);
}
throwError('这是一个错误');
export {};
//# sourceMappingURL=index.js.map