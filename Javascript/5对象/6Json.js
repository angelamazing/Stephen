//JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。
/* number：和JavaScript的number完全一致；
boolean：就是JavaScript的true或false；
string：就是JavaScript的string；
null：就是JavaScript的null；
array：就是JavaScript的Array表示方式——[]；
object：就是JavaScript的{ ... }表示方式。 */
//JSON还定死了字符集必须是UTF-8
//JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。
'use strict';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
var s = JSON.stringify(xiaoming);//对象序列化成JSON格式的字符串
console.log(s);

var s1=JSON.stringify(xiaoming, null, '  ');//输出得好看一些 第二个参数用于控制如何筛选对象的键值
console.log(s1);

var s3=JSON.stringify(xiaoming, ['name', 'skills'], '  ');//还可以传入一个函数，这样对象的每个键值对都会被函数先处理
console.log(s3);

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

var s4=JSON.stringify(xiaoming, convert, '  ');//传入一个函数
console.log(s4);


var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}' 这里直接调用了toJson方法

//反序列化把它变成一个JavaScript对象
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45