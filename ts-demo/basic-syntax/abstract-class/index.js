class Package {
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    // 通用方法：打印包裹详情
    printPackage() {
        console.log(`包裹重量为: ${this.weight}kg, 运费为: ${this.calculate()}元`);
    }
}
// 标准包裹
class StandardPackage extends Package {
    unitPrice;
    constructor(weight, unitPrice // 每公斤的固定费率
    ) {
        super(weight);
        this.unitPrice = unitPrice;
    }
    // 实现抽象方法：计算运费
    calculate() {
        return this.weight * this.unitPrice;
    }
}
// 创建标准包裹实例
const s1 = new StandardPackage(10, 5);
s1.printPackage();
class ExpressPackage extends Package {
    unitPrice;
    additional;
    constructor(weight, unitPrice, // 每公斤的固定费率(快速包裹更高)
    additional // 超出10kg以后的附加费
    ) {
        super(weight);
        this.unitPrice = unitPrice;
        this.additional = additional;
    }
    // 实现抽象方法：计算运费
    calculate() {
        if (this.weight > 10) {
            // 超出10kg的部分，每公斤多收additional对应的价格
            return 10 * this.unitPrice + (this.weight - 10) * this.additional;
        }
        else {
            return this.weight * this.unitPrice;
        }
    }
}
// 创建特快包裹实例
const e1 = new ExpressPackage(13, 8, 2);
e1.printPackage();
export {};
//# sourceMappingURL=index.js.map