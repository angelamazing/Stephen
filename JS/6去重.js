var temp=[1,2,7,2,1,3,6];
console.log("原始数组:"+temp);

function duplicates(arr)
 {
    var i=0;
    var newArr = arr.sort(); //排序后的新数组
    var outArr = [] ;        //去重后输出数组

    while(i<newArr.length)
    {
        outArr.push(newArr[i]); //插入符合条件的元素

        var j=i+1;
        if (j==newArr.length) break;
        while(newArr[j]==newArr[i]) j++;
        i=j;
    }

return outArr;
}

var out=duplicates(temp);

console.log("输出有序去重数组:"+out);

