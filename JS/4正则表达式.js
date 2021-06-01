var patt = /runoob/i; //i  是一个修饰符 (搜索不区分大小写)。runoob  是一个正则表达式主体 (用于检索)。

// search() 和 replace()。
var str = "Visit Runoob!"; 
var n = str.search(/Runoob/i);
console.log(n); 

