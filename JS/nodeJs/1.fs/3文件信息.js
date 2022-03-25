'use strict';
var fs = require('fs');
fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

fs.readFile('sample.txt',null,(err,data)=>
{
    if(err)  return console.log(err);
    else  
    {
        data=data.toString();
        console.log(data);
    }
})

fs.appendFile('sample.txt','i am you ','utf-8',err=>{
    if(err) return console.log(err);
})

    
