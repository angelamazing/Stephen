/*
 * @Author: your name
 * @Date: 2021-07-25 20:54:30
 * @LastEditTime: 2021-08-04 15:29:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \3.crypto\1MD5和SHA1.js
 */
//MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示
const crypto = require('crypto');
//如果要计算SHA1，只需要把'md5'改成'sha1'，就可以得到SHA1的结果1f32b9c9932c02227819a4151feed43e131aca40
//还可以使用更安全的sha256和sha512
const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');


console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544