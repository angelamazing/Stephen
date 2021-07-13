//每个函数都包含两个非继承而来的方法：call()方法和apply()方法。
//都是在特定的作用域中调用函数，等于设置函数体内this对象的值，以扩充函数赖以运行的作用域。

// 例 1
window.color = 'red';
document.color = 'yellow';

var s1 = { color: 'blue' };
function changeColor() {
    console.log(this.color);
}

changeColor.call();         //red (默认传递参数)
changeColor.call(window);   //red
changeColor.call(document); //yellow
changeColor.call(this);     //red
changeColor.call(s1);       //blue

// 例 2
var Pet = {
    words: '...',
    speak: function (say) {
        console.log(say + '' + this.words)
    }
}
Pet.speak('Speak'); // 结果：Speak...
var Dog = {
    words: 'Wang'
}
// 将this的指向改变成了Dog
Pet.speak.call(Dog, 'Speak'); // 结果： SpeakWang

