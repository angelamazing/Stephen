client.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    //获取 db 对象
    const db = client.db(dbName);
    //新增数据
    db.collection("user").insertOne({ "username": "nodejs", "age": 10 }, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        client.close();
    })
});