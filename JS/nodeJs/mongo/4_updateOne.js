client.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    const db = client.db(dbName); //获取 db 对象
    db.collection("user").updateOne({ "name": "zhangsan" }, { $set: { "age": 50 } }, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        client.close();
    })