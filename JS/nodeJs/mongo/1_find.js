client.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    const db = client.db(dbName); //获取 db 对象
    db.collection("user").find({}).toArray(function (err, data) { //查找
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
        client.close();
    })
});