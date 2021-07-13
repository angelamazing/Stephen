//创建  
    var result;
    var fruits = ['Apple', 'Banana']; //fruits.length 为 2

//通过索引访问数组元素
//遍历数组
    /* fruits.forEach(function(value,index,array){
        console.log(value,index);
    }) */

//栈方法
    result = fruits.push('Orange');//返回的是新数组长度
    result = fruits.pop();//返回出栈值

//头部方法
    result = fruits.shift();//返回出队值
    result = fruits.unshift('Strawberry') //返回的是新数组长度
    
//找出索引
    result = fruits.indexOf('Banana');

//通过索引删除某个元素
    var removedItem = fruits.splice(pos, 1);

//从一个索引位置删除多个元素
    var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
    var removedItems = vegetables.splice(pos, n);

//复制一个数组
    var shallowCopy = fruits.slice();


