//Sub是子类的构造函数，this是子类的实例。在实例上调用父类的构造函数Super，就会让子类实例具有父类实例的属性。
function Sub(value) {
  Super.call(this);
  this.prop = value;
}

//第二步，是让子类的原型指向父类的原型，这样子类就可以继承父类原型。
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;
Sub.prototype.method = '...';
/* 不是直接等于Super.prototype
否则后面两行对Sub.prototype的操作，会连父类的原型Super.prototype一起修改掉。 */