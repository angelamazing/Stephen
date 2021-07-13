//switch语句
var a = 1;
switch (a) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
    default:
}

//for in 遍历对象的键
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'

};
for (var key in o) {
    if (o.hasOwnProperty(key)) { //过滤掉对象继承的属性，用hasOwnProperty()来实现：
        console.log(key); // 'name', 'age', 'city'
    }
}

//解构赋值
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var { name, age, passport } = person; // name, age, passport分别被赋值为对应属性:
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);