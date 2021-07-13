/* function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
} */
//新的class实现
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();


//class继承
class PrimaryStudent extends Student { //PrimaryStudent从Student中继承,其实简化了原型链代码的方式
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}

var P1=new PrimaryStudent('mike',12);
P1.myGrade()