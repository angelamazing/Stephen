function Animal() {

    this.species = "动物";

}

//1构造函数绑定
function Cat(name, color) {

    Animal.apply(this, arguments);//arguments可去掉
    this.name = name;
    this.color = color;
}
var cat1 = new Cat("大毛", "黄色");

console.log(cat1.species); // 动物

//2prototype模式
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;//为什么要做这一步呢?
var cat1 = new Cat("大毛", "黄色");
alert(cat1.species); // 动物

//3直接继承prototype,优点:效率高,省内存 缺点:Cat.prototype和Animal.prototype现在指向了同一个对象
//那么任何对Cat.prototype的修改，都会反映到Animal.prototype
//例如　　Cat.prototype.constructor = Cat;把Animal.prototype对象的constructor属性也改掉了！
function Animal() { }
Animal.prototype.species = "动物";

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛", "黄色");
alert(cat1.species); // 动物


//4利用空对象作为中介
//F是空对象，所以几乎不占内存。这时，修改Cat的prototype对象，就不会影响到Animal的prototype对象。
var F = function () { };

F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;

//封装成一个函数
function extend(Child, Parent) {

    var F = function () { };

    F.prototype = Parent.prototype;

    Child.prototype = new F();

    Child.prototype.constructor = Child;

    Child.uber = Parent.prototype;

}

//使用的时候，方法如下
extend(Cat, Animal);
var cat1 = new Cat("大毛", "黄色");
console.log(cat1.species); // 动物

