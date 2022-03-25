const mysql = require('mysql');
const {MYSQL_CONFIG} =require('../config/db')//直接从模块中获取这个MYSQL_CONFIG

//创建连接对象
const connection = mysql.createConnection(MYSQL_CONFIG);    

//开始连接
connection.connect(); 

//执行sql语句
const sql = 'select * from student';
//connection.query(sql语句,function(err,result){})
connection.query(sql, (err, result) => {
    if (err) {
        console.log('error', err);
        return;
    }
    for (let item in result)
    console.log(JSON.stringify(result[item]),'\n');
})

connection.end();


