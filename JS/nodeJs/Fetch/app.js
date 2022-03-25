/*
 * @Author: your name
 * @Date: 2021-07-25 20:54:30
 * @LastEditTime: 2021-07-28 16:40:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeJs\Fetch\app.js
 */
/* fetch(url,head)   head:{键:值}
        发送带凭据的请求:
        fetch('https://example.com', {
        credentials: 'include'
        })   

*/


const { time } = require('console');

fetch = require('node-fetch');

async function getJSON() {
    let url = 'https://api.github.com/users/11111';
    try {
        console.log("response:");
        let response = await fetch(url); //等待fetch异步操作
        let data = await response.json(); //HTTP 响应->JSON内容,这也是一个Promise->resolve
        console.log(data);
        return data;
    } catch (error) {
        console.log('Request Failed', error);
    }
}

getJSON();

