//类实现接口
//实现（implements）是面向对象中的一个重要概念
//一个类只能继承自另一个类,但有时候不同类有共有的特性
//把共有的特性提取成接口,大大提高了面向对象的灵活性
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}

//接口继承接口
interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}

//接口继承类
//常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};