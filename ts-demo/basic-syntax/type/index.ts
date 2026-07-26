type num = number;
let price: num = 100;

//联合类型
type Status = number | string
type Gender = '男' | '⼥'
function printStatus(status: Status) {
    console.log(status);
}
function logGender(str: Gender) {
    console.log(str)
}
printStatus(404);
printStatus('200');
printStatus('501');
logGender('男')
logGender('⼥')

//交叉类型
//⾯积
type Area = {
    height: number; //⾼
    width: number; //宽
};
//地址
type Address = {
    num: number; //楼号
    cell: number; //单元号
    room: string; //房间号
};
// 定义类型House，House是Area和Address组成的交叉类型
type House = Area & Address;
const house: House = {
    height: 180,
    width: 75,
    num: 6,
    cell: 3,
    room: '702'
};