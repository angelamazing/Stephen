function person(pname, age) {
  this.pname = pname,
  this.age = age,
  this.sayname=()=>{console.log(this.pname);}
}

let tmp = function () { };
tmp.prototype = person.prototype;

function man(sex) {
  this.sex = sex;
}

man.prototype = new tmp();

let jerry = new man("ad");
jerry.name = 'jas';
let p1 = new person("ps",13);

console.log(jerry.sayname())
