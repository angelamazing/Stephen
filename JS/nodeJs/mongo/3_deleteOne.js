client.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    //获取 db 对象
    const db = client.db(dbName);
    //删除数据
    db.collection("user").deleteOne({ "username": "nodejs" }, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        client.close();
    });
});