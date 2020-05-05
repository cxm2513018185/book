/**
 * 路由接口
 */
const express = require('express');
const router = express.Router();
const service = require('./service');

// 所有图书信息
router.get('/books', service.allBooks);
// 添加图书
router.post('/books/book', service.addBook);
// 编辑图书，根据id查询单条数据
router.get('/books/book/:id', service.getBookById);
// 编辑图书
router.put('/books/book', service.editBook);
// 删除图书
router.delete('/books/book/:id', service.deleteBook);

module.exports = router;