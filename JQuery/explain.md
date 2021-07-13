1.按ID查找
    // 查找<div id="abc">:
    var div = $('#abc');
2.按tag查找
    var ps = $('p'); // 返回所有<p>节点
    ps.length; // 数一数页面有多少个<p>节点
3.按class查找
    var a = $('.red'); // 所有节点包含`class="red"`都将返回
    // 例如:
    // <div class="red">...</div>
    // <p class="green red">...</p>
    var a = $('.red.green'); // 注意没有空格！
    // 符合条件的节点：
    // <div class="red green">...</div>
    // <div class="blue green red">...</div>
