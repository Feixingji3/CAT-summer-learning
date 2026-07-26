//定义类结构
// PersonInterface接口，用于限制Person类的格式
interface PersonInterface {
    name: string
    age: number
    speak(n: number): void
}

// 定义一个类 Person，实现 PersonInterface 接口
class Person implements PersonInterface {
    constructor(
        public name: string,
        public age: number
    ) { }

    // 实现接口中的 speak 方法
    speak(n: number): void {
        for (let i = 0; i < n; i++) {
            // 打印出包含名字和年龄的问候语句
            console.log(`你好，我叫${this.name}，我的年龄是${this.age}`);
        }
    }
}

// 创建一个 Person 类的实例 p1，传入名字 'tom' 和年龄 18
const p1 = new Person('tom', 18);
p1.speak(3);

//定义对象结构
interface UserInterface {
    name: string
    readonly gender: string // 只读属性
    age?: number // 可选属性
    run: (n: number) => void
}

const user: UserInterface = {
    name: "张三",
    gender: '男',
    age: 18,
    run(n) {
        console.log(`奔跑了${n}米`)
    }
};

//定义函数结构
interface CountInterface {
    (a: number, b: number): number;
}

const count: CountInterface = (x, y) => {
    return x + y;
};

//接⼝之间的继承
interface PersonInterface1 {
    name: string // 姓名
    age: number  // 年龄
}

interface StudentInterface extends PersonInterface1 {
    grade: string // 年级
}

const stu: StudentInterface = {
    name: "张三",
    age: 25,
    grade: '高三',
}

//接⼝⾃动合并（可重复定义）
// PersonInterface接口
interface PersonInterface2 {
    // 属性声明
    name: string;
    age: number;
}

// 给PersonInterface接口添加新属性
interface PersonInterface2 {
    // 方法声明
    speak(): void;
}

// Person类实现PersonInterface
class Person1 implements PersonInterface2 {
    name: string;
    age: number;

    // 构造器
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 方法
    speak() {
        console.log('你好！我是老师:', this.name)
    }
}