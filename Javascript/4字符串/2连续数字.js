//返回第一次出现的下标，没有返回-1
function constantNumberInString(str, n) {
    let i, j;
    for (i = 0; i < str.length - n + 1; i++) {
        for (j = i; j < i + n; j++) {
            if (isNaN(str.charAt(j))) break;
        }
        if (j == i + n) return i;
    }
    if (i == str.length - n + 1) return -1;
}

//返回结果
function resultString(str,n)
{
    let resultNumber = constantNumberInString(str, n);
    if(resultNumber==-1)
        return 'no such string';
    else
        return str.substring(resultNumber, resultNumber + n);
}

//测试
let str = '123sa23354dasaasd';
let result = resultString(str,3);
console.log(result);