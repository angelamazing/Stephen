//buffer专门存储二进制数据 和数组类型相似
//使用buffer直接使用,不需要引入
//buff每一个元素范围是0-ff 0-255 00000000-11111111 占用一个字节

var str="abbccc";
var buf=Buffer.from(str);//将str转换成二进制
console.log(buf); //[97, 98, 98, 99, 99, 99]
console.log(buf.length);//占用内存大小,用字节为单位

var buf2=Buffer.alloc(10);
buf2[0]=37;
//buf2[10]=23; 不会自动添加,Buffer大小一旦确定,无法自动增加空间
console.log(buf2[0]);



