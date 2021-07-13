function Animal() {

    this.species = "动物";

}

Animal.prototype.species='动物';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}


function extend(Child, Parent) {//是否有必要构造这个空函数呢？

    var F = function () { };

    F.prototype = Parent.prototype;//这里将空函数的原型对象指针指向了Parent的原型

    Child.prototype = new F(); 
    //注意child.prototype

    Child.prototype.constructor = Child;//

   

}

extend(Cat, Animal);
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物
