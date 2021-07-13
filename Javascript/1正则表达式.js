//正则表达式 admin@163.com
//规则 前面:XXXXX   跟着:@  后边:xxxx.com
// var 变量 = new RegExp("正则表达式","匹配模式")
//匹配模式 i:忽略大小写,g:全局匹配模式

/*检查一个字符串是否有a
var reg = new RegExp("a","i");第一种创建方式
var result = reg.test("Abc");
console.log(result);
*/
//var 变量 = /正则表达式/匹配模式
//var reg = /a/i;检测a
//var reg = /a|b/;检测是否有a或者b [ab] == a|b
//var reg = /[a-z]/任意小写字母
//var reg = /[A-z]/任意字母
//var reg = /a[bde]c/ 检测是否含有abc或adc或aec

//var reg = /[^ab]/ 除了ab以外的

//var reg = /[^0-9]/ 除了数字

var str = "1a2b3c4d5e";

var result = str.split(/[A-z]/);

console.log(result);

//seach()
