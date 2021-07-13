//Function 类直接创建函数的语法:var function_name = new function(arg1, arg2, ..., argN, function_body)
//上面每个 arg 都是一个参数，最后一个参数是函数主体（要执行的代码）。这些参数必须是字符串。
//数只不过是一种引用类型，它们的行为与用 Function 类明确创建的函数行为是相同的。
var sayHi = new Function("sName", "sMessage", "console.log(\"Hello \" + sName + sMessage);");
sayHi("Jeson"," I need your help");


//函数作为参数传递给另一个函数
function callAnotherFunc(fnFunction, vArgument) {
    fnFunction(vArgument);
}

var doAdd = new Function("iNum", "console.log(iNum + 10)");

callAnotherFunc(doAdd, 10);

