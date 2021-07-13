//函数作为返回值,闭包结构
//闭包:lazy_sum中又定义了函数sum,内部函数sum可以引用外部函数lazy_sum的参数和局部变量,lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中
//返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
function lazy_sum(arr) {
  var sum = function () {
      return arr.reduce(function (x, y) {
          return x + y;
      });
  }
  return sum;
}
var f = lazy_sum(arr);//这里只是返回了求和函数sum
console.log(f());//知道调用了f()返回函数才执行


//闭包例子
function count() {
  var arr = [];
  for (let i = 1; i <= 3; i++) { //这里如果改用var会发生什么?
      arr.push(function () {
          return i * i;
      });
  }
  return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
f1();//1
f2();//4
f3();//9