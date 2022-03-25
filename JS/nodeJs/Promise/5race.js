//同样是接口A、B、C，只要有一个响应了，我就可以调接口D，那么怎么实现呢？
let getInfoA = new Promise((resolve, reject) => {
    console.log('小A开始执行了')
    setTimeout((err => {
        resolve('小A最快')
    }),1000)
})
let getInfoB = new Promise((resolve, reject) => {
    console.log('小B开始执行了')
    setTimeout((err => {
        resolve('小B最快')
    }),1001)
})
let getInfoC = new Promise((resolve, reject) => {
    console.log('小C开始执行了')
    setTimeout((err => {
        resolve('小C最快')
    }),1002)
})
Promise.race([getInfoA, getInfoB, getInfoC]).then(res => {
    console.log(res)
})
//这里将最快的那一个专递给了then里面的race
