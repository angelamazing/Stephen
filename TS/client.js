var net = require('net');

//创建一个端口为 port 和主机为 host的 TCP 连接 ,host 默认为 'localhost'。
var client = net.connect({ port: 8080 }, function () {
    console.log('连接到服务器！');
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function () {
    console.log('断开与服务器的连接');
});