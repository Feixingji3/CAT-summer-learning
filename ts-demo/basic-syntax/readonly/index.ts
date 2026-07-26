class Car {
    constructor(
        public readonly vin: string,    // 车辆识别码，为只读属性
        public readonly year: number,   // 出厂年份，为只读属性
        public color: string,
        public sound: string
    ) { }

    // 打印车辆信息
    displayInfo() {
        console.log(`
            出厂年份: ${this.year},
            识别码: ${this.vin},
            颜色: ${this.color},
            音响: ${this.sound}`);

    }
}

const car = new Car('1HGCM82633A123456', 2018, '黑色', 'Bose音响');
car.displayInfo()

// 以下代码均错误: 不能修改 readonly 属性
// car.vin = '897WYE87HA8SGDD8SDGHF';
// car.year = 2020;