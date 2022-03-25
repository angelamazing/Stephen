/*
 * @Author: your name
 * @Date: 2021-08-21 10:22:11
 * @LastEditTime: 2021-08-21 10:26:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JS_Pattern\1for in.js
 */
// 对象
let man = {
    hands: 2,
    legs: 2,
    heads: 1
};

// 在代码的另一个地方给所有的对象添加了一个方法
if (typeof Object.prototype.clone === "undefined") {
    Object.prototype.clone = function () { };
}

/* for (var i in man) {
    if (man.hasOwnProperty(i)) { // filter
        console.log(i, ":", man[i]);
    }
} */

//better way
let i,
    hasOwn = Object.prototype.hasOwnProperty; //查找属性时从Object对象一路找到原型的冗长过程
for (i in man) {
    if (hasOwn.call(man, i)) { // 过滤
        console.log(i, ":", man[i]);
    }
}

