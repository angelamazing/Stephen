let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2000)
    }, 1000)
    console.log(1111)
})

promise.then(res => {
    console.log(res) // 这个地方会打印捕捉到的2000
    return res + 1000 // 这个函数的返回值，返回的就是这个promise对象捕捉到的成功的值
}).then(res => {
    console.log(res) //这个地方打印的就是上一个promise对象return的值
})