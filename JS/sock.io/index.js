/*
 * @Author: your name
 * @Date: 2021-08-31 17:29:21
 * @LastEditTime: 2021-08-31 17:31:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sock.io\index.js
 */

//个人简写如下:
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/static/index.html')
})
app.listen(3000, () => {
    console.log('listening on *:3000')
})