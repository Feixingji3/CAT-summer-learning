// 无警告
function logMessage1(msg: string): void {
    console.log(msg)
}

// 无警告
function logMessage2(msg: string): void {
    console.log(msg)
    return;
}

// 无警告
function logMessage3(msg: string): void {
    console.log(msg)
    return undefined
}


// function logMessage4(msg: string): void {
//     console.log(msg)
// }
// let result = logMessage4('你好')
// if (result) { // 此行报错: 无法测试 "void" 类型的表达式的真实性
//     console.log('logMessage有返回值')
// }

function logMessage5(msg: string): undefined {
    console.log(msg)
}
let result = logMessage5('你好')
if (result) { // 此行无警告
    console.log('logMessage有返回值')
}