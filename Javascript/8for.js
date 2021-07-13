/* 	• item:值
    • index:键
    • arr:数组本身 */
var arr = ['nick', 'freddy', 'mike', 'james'];
arr.forEach(function (item, index, arr) {
    /*     console.log(item);
        console.log(index);
        console.log(arr); */
});
/* for (var index in arr) {	//index:键
    console.log(index + '. ' + arr[index]);

} */

var userMsg = {
    nick: {
        name: 'nick',
        age: 18,
        sex: '男'
    },
    freddy: {
        name: 'freddy',
        age: 24,
        sex: '男'
    }

};
for(var key1 in userMsg){   //key1:键
    console.log(key1);	
    for(var key2 in userMsg[key1]){
	console.log(key2 +': ' + userMsg[key1][key2]);
    }
}
