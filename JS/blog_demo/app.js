/*
 * @Author: your name
 * @Date: 2021-07-25 20:54:23
 * @LastEditTime: 2021-07-28 22:33:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog_demo\app.js
 */
const querystring = require('querystring');
const { changeRes, getFileMime, handleBlogRoute } = require('./src/routes/blog');
const URL = require('url');
const path = require('path');
const fs = require('fs');

let G = {};
G['staticpath'] = '/static';

// 处理POST数据,Promise形式
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({});
      return;
    }
    console.log(req.headers);
    if (req.headers['content-type'] !== 'application/json') {
      resolve({});
      return;
    }
    
    let postData = '';

    req.on('data', (chunk) => {
      postData += chunk.toString();
    });

    req.on('end', () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });

  return promise;
};

//主要逻辑处理
const serverHandler = (req, res) => {

  res.setHeader('Content-Type', 'application/json');

  //静态文件响应
  //增加res方法
/*   changeRes(res) */;

  let pathname = URL.parse(req.url).pathname;

  pathname = pathname == '/' ? '/index.html' : pathname;
  let extname = path.extname(pathname);
  //2、通过fs模块读取文件
  if (extname) {  //如果有后缀名用静态web服务处理
    try {
      let data = fs.readFileSync(__dirname + G['staticpath'] + pathname);
      if (data) {
        let mime = getFileMime(extname);
        res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
        res.end(data);
      }
    } catch (error) {
      console.log(error);
    }
    return;
  }


  const url = req.url;
  req.path = url.split('?')[0];
  req.query = querystring.parse(url.split('?')[1]);

  getPostData(req).then((postData) => {

    console.log(postData);
    req.body = postData;

    const blogDataPromise = handleBlogRoute(req, res);
    if (blogDataPromise) {
      blogDataPromise.then((blogData) => {
        res.end(JSON.stringify(blogData));
      });
      return;
    }


    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  });
};

module.exports = serverHandler;


