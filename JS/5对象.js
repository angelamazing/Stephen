//JavaScript 中的所有事物都是对象：字符串、数值、数组、函数
//JavaScript 提供多个内建对象，比如 String、Date、Array 等等。 对象只是带有 <属性和方法> 的特殊数据类型。

/*  创建:
     1.new
      var person=new Object();
      以下为添加新属性:
      person.firstname="John"; 
      person.lastname="Doe";
      person.age=50;
      person.eyecolor="blue"; 
      document.write(person.firstname + " is " + person.age + " years old.");

     2.function 对象构造器 
      function person(firstname,lastname,age,eyecolor)
      {
      this.firstname=firstname;
      this.lastname=lastname;
      this.age=age;
      this.eyecolor=eyecolor;
      }
      myFather=new person("John","Doe",50,"blue");
      document.write(myFather.firstname + " is " + myFather.age + " years old.");
*/

/*方法添加
function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
    this.changeName=changeName;

    function changeName(name)
    {
        this.lastname=name;
    }
}
*/





function createModule(str1, str2) {
    var obj =
            {
                greeting : str1,
                name : str2,
                sayIt : function(){return this.greeting + " , " + this.name;}
            };
    return obj;   
}

var las=createModule("Jack","Lee");

console.log(las.sayIt());

