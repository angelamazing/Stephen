enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };

interface action {
    shout(): void;
    punch(): void;
    readWeek(): void;
}

class Person implements action {
    private name: string;
    private age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    createBaby<T>(length: number, value: T) {
        let result: T[] = [];
        for (let i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }

    toString() {
        console.log(`my name is ${this.name} , ${this.age} old`);
    }
    shout() {
        console.log("i am a person");
    }
    punch() {
        console.log("punch on your face");
    }
    readWeek() {
        for (let i in Days)
        {
            if(typeof(Days[i]) === 'string')
               console.log(Days[i]);
           }
    }
}

class Man extends Person implements action {
    public sex: string;
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }

}

class Woman extends Person implements action {
    public sex: string;
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }
}

let mike = new Man('mike', 13, 'boy');
mike.shout();
mike.toString();
mike.readWeek();

let linda = new Woman('linda', 14, 'female');
linda.toString();
let baby = linda.createBaby(3, 'boy');
console.log(baby);



