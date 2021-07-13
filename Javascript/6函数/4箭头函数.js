var f = (a, b) => {
    let result = a + b;
    return result;
}
f(6, 2);  // 8

var f = (id, name) => ({ id: id, name: name }); //返回对象

var func = () => {
    // 箭头函数里面没有 this 对象，
    // 此时的 this 是外层的 this 对象，即 Window 
    console.log(this)
}

func(55)  // Window 


var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};

var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
obj.getAge(); // 25
