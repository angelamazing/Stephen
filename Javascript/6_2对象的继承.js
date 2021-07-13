function Shape() {
    this.x = 0;
    this.y = 0;
  }
  
  Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };

  function Rectangle() {
    Shape.call(this); // 调用父类构造函数,这里是否有必要
  }
/*    另一种写法
function Rectangle() {
  this.base = Shape;
  this.base();
} */
//第二步
Rectangle.prototype = Object.create(Shape.prototype);//这里Shape.prototype是新创建对象的原型对象
Rectangle.prototype.constructor = Rectangle;

  var p = new Rectangle();//这里会
  p.move(1,2);


/*子类B的print方法先调用父类A的print方法，再部署自己的代码。这就等于继承了父类A的print方法。
    ClassB.prototype.print = function() {
    ClassA.prototype.print.call(this);
    // some code
  } */