/**
 * 实现图书管理系统后台接口
 */
const express = require('express');
const router = require('./router');
const app = express();

app.use(router);
app.listen(3000, () => {
    console.log('服务已启动，端口3000');
})