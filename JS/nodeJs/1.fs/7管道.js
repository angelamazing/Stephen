const fs=require('fs');

var readstream=fs.createReadStream('./sample.txt');
var writeStream=fs.createWriteStream('./output1.txt');

readstream.pipe(writeStream);

console.log('完成');