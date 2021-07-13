//apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。
/* 它接收一个数组作为函数执行时的参数
    func.apply(thisValue, [arg1, arg2, ...])
*/

// 例 1
 window.number = 'one';
 document.number = 'two';

 var s1 = {number: 'three' };
 function changeColor(){
     console.log(this.number);
 }

 changeColor.apply();         // one (默认传参)
 changeColor.apply(window);   // one
 changeColor.apply(document); // two
 changeColor.apply(this);     // one
 changeColor.apply(s1);       // three
 
  // 例 2
  function Pet(words){
      this.words = words;
      this.speak = function () {
          console.log( this.words)
      }
  }
  function Dog(words){
      // Pet.call(this, words); // 结果： Wang
     Pet.apply(this, arguments);  // 结果： Wang
  }
  var dog = new Dog('Wang');
  dog.speak();

  function f(x, y){
    console.log(x + y);
  }
  
  f.call(null, 1, 1) // 2
  f.apply(null, [1, 1]) // 2