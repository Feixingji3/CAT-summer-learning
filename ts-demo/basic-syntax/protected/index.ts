class Person {
    // name和age是受保护属性，不能在类外部访问，但可以在【类】与【子类】中访问
    constructor(
        protected name: string,
        protected age: number
    ) { }

    // getDetails是受保护方法，不能在类外部访问，但可以在【类】与【子类】中访问
    protected getDetails(): string {
        // 类中能访问受保护的name和age属性
        return `我叫: ${this.name}, 年龄是: ${this.age}`
    }

    // introduce是公开方法，类、子类、类外部都能使用
    introduce() {
        // 类中能访问受保护的getDetails方法
        console.log(this.getDetails());
    }
}

const p1 = new Person('Jack', 18)
// 可以在类外部访问introduce
p1.introduce()

// 以下代码均报错
// p1.getDetails()
// p1.name
// p1.age

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
    }
    study() {
        // 子类中可以访问introduce
        this.introduce()
        // 子类中可以访问name
        console.log(`${this.name}正在努力学习`)
    }
}

const s1 = new Student('tom', 17)
s1.introduce()
s1.study()