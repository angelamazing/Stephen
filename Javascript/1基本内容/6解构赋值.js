var [x, y, z] = ['hello', 'JavaScript', 'ES6'];// x, y, z分别被赋值为数组对应元素

let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];

let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var { name, age, passport } = person; // name, age, passport分别被赋值为对应属性

/* var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};

var { name, address: { city, zip } } = person; */

/* var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678'
};
// 如果person对象没有single属性，默认赋值为true:
var {name, single=true} = person */

({x, y} = { name: '小明', x: 100, y: 200});
