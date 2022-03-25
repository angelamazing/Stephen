'use strict';

var fs = require('fs');
//读取二进制文件时,回调函数的data参数将返回一个Buffer对象
//Buffer对象就是一个包含零个或任意个字节的数组
fs.readFile('D:/Projects/nodeJs/1_fs/sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});
console.log(__dirname);