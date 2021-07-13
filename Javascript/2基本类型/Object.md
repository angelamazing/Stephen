1.Object
1.1语法
    new Object([value])
    当以非构造函数形式被调用时，Object 的行为等同于 new Object()。
1.2 Object 构造函数
1.2.1属性
    Object.length  // 1
    Object.prototype    可以为所有 Object 类型的对象添加属性。
1.2.2静态方法
    Object.assign(target, ...sources)通过复制一个或多个对象来创建一个新的对象。
    Object.create(proto，[propertiesObject]) 
        使用指定的原型对象和属性创建一个新对象。使用现有的对象来提供新创建的对象的__proto__。
    Object.defineProperty(object1, 'property1', {
        value: 42,
        writable: false
    });
    Object.defineProperties(object1,{property1:{value:data,writable:true}},{...})
    