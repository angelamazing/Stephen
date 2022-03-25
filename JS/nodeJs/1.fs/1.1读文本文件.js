//和所有其它JavaScript模块不同的是，fs模块同时提供了异步和同步的方法
'use strict';
var fs = require('fs');
//正常读取时，err参数为null,data参数为读取到的String
//读取发生错误时，err参数代表一个错误对象，data为undefined
//fs.readfile(path,encode,cb(err,data));
fs.readFile('D:/Projects/nodeJs/1_fs/sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});