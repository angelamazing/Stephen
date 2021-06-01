//函数声明
function functionName(parameters) {
    执行的代码
  }

//函数表达式
var x = function (a, b) {return a * b}; //此时变量可以作为一个函数使用
var z=x(3,4);
console.log(z);

//Function() 构造函数
var myFunction = function (a, b) {return a * b};
var x = myFunction(4, 3);