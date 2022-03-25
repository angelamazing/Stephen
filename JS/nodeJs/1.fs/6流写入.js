const fs=require('fs');
var data='';
for(let i=0;i<500;i++)
{
    data+='我是保存的数据\n';
}
var writeStream=fs.createWriteStream('./output.txt');
writeStream.write(data);
writeStream.end();
writeStream.on('finish',()=>{
    console.log('finished');
})
