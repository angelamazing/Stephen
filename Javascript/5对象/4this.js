var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());//this指向person对象

function myFunction() {
    return this;
}
myFunction();//指向windows,因为此时实际上是windows这个全局变量调用了函数.


//call,apply绑定方法
var person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName: "John",
    lastName: "Doe",
}
var name1 = person1.fullName.call(person2);  // 返回 "John Doe"
console.log(name1);
