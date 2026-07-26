type LogFunc = () => void

const f1: LogFunc = () => {
    return 100; // 允许返回非空值
};

const f2: LogFunc = () => 200; // 允许返回非空值

const f3: LogFunc = function () {
    return 300; // 允许返回非空值
};

//为什么？为了确保下面代码成立
const src = [1, 2, 3];
const dst = [0];
src.forEach((el) => dst.push(el))