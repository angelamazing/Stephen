/*
 * @Author: your name
 * @Date: 2021-07-25 20:54:29
 * @LastEditTime: 2021-08-21 10:18:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeJs\test.js
 */

let man = {
  hands: 2,
  legs: 2,
  heads: 1
};

if (typeof Object.prototype.clone === "undefined") {
  Object.prototype.clone = function () { };
}

for (var i in man) {
  if (man.hasOwnProperty(i)) { // filter
    console.log(i, ":", man[i]);
  }
}

var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in man) {
    if (hasOwn.call(man, i)) { // 过滤
        console.log(i, ":", man[i]);
    }
}