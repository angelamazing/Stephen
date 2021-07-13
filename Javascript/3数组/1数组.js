
var colors = new Array(5);//()内可不填
var colors_1 = new Array("red", "blue", "green");
var colors_2 = Array();
var colors_3 = ["yellow", "blue"];

colors.length = 0;//可以对尾部进行修改
/*
console.log(colors_1.toString()); // red,blue,green
console.log(colors_1.valueOf()); // red,blue,green
console.log(colors_1); // red,blue,green
console.log(colors_1.join("||"));
*/

colors_1.push("yellow");//类似堆栈的push,pop方法
var item = colors_1.pop();
var item_1 = colors.shift();//类似队列取出第一项
var item_2 = colors.unshift("gray");//在第一项插入

var arr = [1, 3, 9, 9, 5, 61];
arr.reverse();
arr.sort();//因为用每个数组项的 toString() 转型方法，然后比较得到的字符串，以确定如何排序。所以61会在9前面
console.log("仅适用sort():" + arr);

//一个排序
function compare(value1, value2) {
     if (value1 < value2) {
          return -1;
     } else if (value1 > value2) {
          return 1;
     } else {
          return 0;
     }
}
arr.sort(compare);//传入比较函数,作为数据对比大小的方法
console.log("加入comapare函数作为参数" + arr);


//方法
var arr_1 = arr.concat(11, 12, 13); //尾部添加返回一个新的数组,arr不会改变
var arr_2 = arr.slice(0, 3);//arr数组的0~2项传递给arr_2,arr不会改变
var arr_3 = arr.slice(3); //arr数组的3~项传递给arr_3,arr不会改变
arr.splice(1, 0, 13, 22);//起始位置1,删除0项,并且插入13,22;
console.log(arr);


console.log(arr.indexOf(9));//从开头查找数值为9的第一项的下标
console.log(arr.lastIndexOf(9));//从末尾查找数值为9的第一项的下标



var values = [1, 2, 3, 4, 5];
var sum = values.reduce(function (prev, cur, index, array) {//对数组进行求和
     return prev + cur;
});