const http = require('http');
const querystring =require('querystring');

const server = http.createServer((req, res) => {
    //http://127.0.0.1:3000/api/blog/list?author=zhou&keyword=A
    const method = req.method;
    console.log('method', method);//method GET
    const url = req.url;   //  /api/blog/list?author=zhou&keyword=A
    req.query = querystring.parse(url.split('?')[1]);//字符串转对象 {author: 'zhou', keyword: 'A'}

    res.end(
        JSON.stringify(req.query)//对象转JSON字符串
    );
    
})  

server.listen(3000,()=>{
    console.log("server running at port 3000");
})