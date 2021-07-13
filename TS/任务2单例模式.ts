//单例模式:一次性,避免多次重复制造
//单例模式1:需要的时候进行实例化
class Demo {
    private static instance: Demo; //静态属性
    private name: string;
    private age: number;
    introduce() {
        console.log(`my name is ${this.name},${this.age}`);
    }
    private constructor() {
        this.name = 'mike';
        this.age = 13;

    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Demo;
        }
        return this.instance;
    }
}
const demo = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo === demo2);//这里说明demo与demo2是同一个对象
demo.introduce();

//单例模式2:一开始就进行实例化
class test {
    private name:string;
    public static instance = new test();
    private constructor(){
        this.name = 'mike';
    }
    public sayname(){
        console.log(`myname is ${this.name}`)
    }
    
}
let a=test.instance;
let b=test.instance;

console.log(a===b);//这列也说明了多次使用不会重复制造;






