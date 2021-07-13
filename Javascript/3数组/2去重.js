let temp = [1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5];
console.log("原始数组:" + temp);

//过滤方法去重
let result = temp.filter(function (value, index, arr) {
    return arr.indexOf(value) === index;
})
console.log("结果数组:" + result);

