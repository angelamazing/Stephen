const fs = require('fs');
const path = require('path');
const url = require('url');

const { SuccessModel, ErrorModel } = require('../model/responseModel');
const {
  getBlogsList,
  getBlogDetail,
  createNewBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blog');

//扩展响应res的方法
function changeRes(res) {
  res.send = (data) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
    res.end(data);
  }
}
//根据后缀名获取响应头文件类型
function getFileMime(extname) {
  var data = fs.readFileSync('D:/Projects/blog_demo/src/data/mime.json'); //同步方法
  let mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
}

// 处理博客相关的路由
const handleBlogRoute = (req, res) => {
  // 定义处理路由的逻辑
  const method = req.method;
  const id = req.query.id;
  console.log(id);
  const blogData = req.body;

  // 博客列表路由
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listDataPromise = getBlogsList(author, keyword);
    return listDataPromise.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  // 博客详情路由
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const detailDataPromise = getBlogDetail(id);
    return detailDataPromise.then((detailData) => {
      return new SuccessModel(detailData);
    });
  }

  // 新建博客路由
  if (method === 'POST' && req.path === '/api/blog/new') {
    const author = 'zhangsan';
    req.body.author = author;
    const newBlogDataPromise = createNewBlog(blogData);

    return newBlogDataPromise.then((newBlogData) => {
      return new SuccessModel(newBlogData);
    });
  }

  // 更新博客路由
  if (method === 'POST' && req.path === '/api/blog/update') {
    const updatedBlogPromise = updateBlog(id, blogData);

    return updatedBlogPromise.then((updatedBlogData) => {
      if (updatedBlogData) {
        return new SuccessModel('更新博客成功!');
      } else {
        return new ErrorModel('更新博客失败...');
      }
    });
  }

  // 删除博客路由
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const author = 'zhangsan';
    const deleteBlogPromise = deleteBlog(id, author);

    return deleteBlogPromise.then((deleteBlogData) => {
      if (deleteBlogData) {
        return new SuccessModel('删除博客成功!');
      } else {
        return new ErrorModel('删除博客失败...');
      }
    });
  }
};

module.exports = {
  changeRes,
  getFileMime,
  handleBlogRoute
}


