/*
 * @Author: your name
 * @Date: 2021-07-25 20:54:29
 * @LastEditTime: 2021-07-29 11:29:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeJs\2.stream\1文本流读取.js
 */
'use strict';

var fs = require('fs');

// 打开一个流:
var rs = fs.createReadStream('sample.txt', 'utf-8');

//监听data事件，每次传递的chunk是流的一部分数据
rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);    
});
//监听end事件
rs.on('end', function () {
    console.log('END');
});
//监听error事件
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});
