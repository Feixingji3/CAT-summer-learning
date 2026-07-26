// function walk(str: string) {
//     if (str === 'up') {
//         console.log("向【上】走");
//     } else if (str === 'down') {
//         console.log("向【下】走");
//     } else if (str === 'left') {
//         console.log("向【左】走");
//     } else if (str === 'right') {
//         console.log("向【右】走");
//     } else {
//         console.log("未知方向");
//     }
// }
// walk('up')
// walk('down')
// walk('left')
// walk('right')
//1.数字枚举
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }
// console.log(Direction)
// //反向映射
// console.log(Direction.Up)
// console.log(Direction[0])
//Direction.Up='shang'//错误，枚举项是只读属性
//也可以指定枚举成员的初始值，其后的成员值会⾃动递增。
// enum Direction {
//     Up=6,
//     Down,
//     Left,
//     Right,
// }
//使⽤数字枚举完成刚才walk函数中的逻辑
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function walk(n) {
    if (n === Direction.Up) {
        console.log("向【上】走");
    }
    else if (n === Direction.Down) {
        console.log("向【下】走");
    }
    else if (n === Direction.Left) {
        console.log("向【左】走");
    }
    else if (n === Direction.Right) {
        console.log("向【右】走");
    }
    else {
        console.log("未知方向");
    }
}
export {};
// walk(Direction.Up)
// walk(Direction.Down)
//2.字符串枚举
// enum Direction {
//     Up = 'up',
//     Down = 'down',
//     Left = 'left',
//     Right = 'right',
// }
// let dir: Direction = Direction.Up;
// console.log(dir);
//3.常量枚举
// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }
// console.log(Directions.Up);
//# sourceMappingURL=index.js.map