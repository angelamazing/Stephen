const fs=require('fs');
var readstream=fs.createReadStream('./sample.txt');
var str='';
var count=0;
readstream.on('data',chunk=>{
    str+=chunk;
    count++;
})
readstream.on('end',()=>{
    console.log(str);
    console.log(count);
})
readstream.on('error',(err)=>{
    console.log(err);
});