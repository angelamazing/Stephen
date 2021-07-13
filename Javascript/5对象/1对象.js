//工厂模式创建对象:解决了创建多个相似对象的问题，但却没有解决对象识别的问题（即怎样知道一个对象的类型）
//为什么无法识别对象的类型呢?因为他们都是从Object容器创造出来的
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}

//构造函数模式创建对象
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
var bool_1 = (person1.constructor == Object);
var bool_2 = (person1.constructor == Person);
console.log(bool_1); //false 构造器并非Object
console.log(bool_2); //true 构造器是Person
console.log(person1 instanceof Object);//true  person1和person2之所以都是Object的实例,是因为所有对象均继承自 Object

//作为构造函数调用
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName(); //"Nicholas"

//作为普通函数调用
Person("GregS", 27, "Doctor"); // 添加到 window
sayName(); //"Greg"





