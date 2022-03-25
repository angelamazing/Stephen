// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);//这里input * input参数传递给resolve()函数
    });
}
// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}
var p = new Promise(function (resolve, reject) {
    console.log('start new Promise...');
    resolve(123);
});
p.then(multiply)//这里p里面的resolve(123),把123这个参数传递给multiply使用,以此类推
 .then(add)
 .then(multiply)
 .then(add)
 .then(function (result) {
    console.log('Got value: ' + result);
});

