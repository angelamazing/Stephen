let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2000) // 成功以后这个resolve会把成功的结果捕捉到
        // reject(2000) // 失败以后这个reject会把失败的结果捕捉到
    }, 1000)
    console.log(1111)
})

promise.then(res => {
    console.log(res) // then里面第一个参数就能拿到捕捉到的成功结果
}).catch(err =>{
    console.log(res)// then里面第二个参数就能拿到捕捉到的失败结果) 
})