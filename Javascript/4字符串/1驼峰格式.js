var sName = "-how-are-you-doing-today?";

function cssStyle2DomStyle(sName) {
    if (sName[0] == '-') sName = sName.slice(1); //第一个字符的判断,如判断成功,切割掉第一个字符'-'

    var sTemp = sName.split("-");
    for (var i = 1; i < sTemp.length; i++) {

        sTemp[i] = sTemp[i].substring(0, 1).toUpperCase() + sTemp[i].substring(1);//放大第一个字母

    }
    console.log(sTemp);
    sName = sTemp.join("");//合并
    return sName;
}

var outname = cssStyle2DomStyle(sName);
console.log("原始:" + sName);
console.log("输出:" + outname);




