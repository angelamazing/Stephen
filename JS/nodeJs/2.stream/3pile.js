//一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。
//默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。
//readable.pipe(writable, { end: false });不希望自动关闭Writable流
'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');
//re->ws
rs.pipe(ws);