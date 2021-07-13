function Person(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.sayname=function() {console.log("My name is "+this.name)}
  }
  
  var p1=new Person("Jeson",12,"boy");
  p1.sayname();
  
  console.log(Person.prototype.constructor == Person);