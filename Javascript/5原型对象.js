
function printf(data)
{
    console.log(data);
}



function Person(name) {
    this.name = name;
}

/* Person.prototype = {
    constructor: Person,
    method: function () { }
};//这里修改Person的原型,同样的构造函数也改变了

printf(Person.prototype.constructor === Person);
printf(Person.prototype.constructor === Object); */

Person.prototype={  
    constructor: Person,
    method: function () { }
}
printf(Person.prototype.constructor === Person);
printf(Person.prototype.constructor === Object);
// 更好的写法 Person.prototype.method=function(){}

printf(Person.constructor.name);
var p1=new Person();
printf(p1.constructor.name);
