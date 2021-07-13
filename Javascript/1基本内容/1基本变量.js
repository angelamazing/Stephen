
var x, y; //变量是动态类型 
let temp;//代码块作用域

function foo() //自动把var变量声明提升到函数顶部,但赋值部分不会
{
  console.log(age);
  var age = 26;
}

foo();//这里会打印undefined,因为只是声明的部分被提升,赋值的部分并没有

for (let i = 0; i < 5; ++i) //改用var会发生什么,会出现输出都是5的情况.
{
  setTimeout(() => console.log(i), 0);
}


let num1 = 5;
let num2 = num1;//两者相互独立

let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name); // "Nicholas" 因为obj同样也指向obj1所指向的对象

function setName(obj) {
  obj.name = "Nicholas";
}
let person_1 = new Object();
setName(person_1);
console.log(person_1.name); // "Nicholas",此时使用该函数改变了对象所指向的值



