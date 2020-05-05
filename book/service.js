/**
 * 业务模块
 */
const fs = require('fs');
const path = require('path');
const db = require('./db');

// 主页面
exports.showIndex = (req, res) => {
    let sql = 'select * from book';
    let data = null;
    db.base(sql, data, (err, result) => {
        if (err) return;
        // .art可不加
        res.render('index.art', {
            list: result
        })
    })
};
// 添加图书页面
exports.toAddBook = (req, res) => {
    res.render('addBook', {});
}
// 添加图书，跳转到列表页
exports.addBook = (req, res) => {
    // 获取表单数据
    let formData = req.body;
    let sql = 'insert into book set ?';
    let obj = {};
    for (let key in formData) {
        obj[key] = formData[key];
    }
    db.base(sql, obj, (err, result) => {
        if (err) return;
        if (result.affectedRows >= 1) {
            console.log('添加数据成功！');
            res.redirect('/');
        }
    })
}
// 编辑图书页面
exports.toEditBook = (req, res) => {
    let id = req.query.id;
    let book = {};
    let sql = 'select * from book where id = ?';
    let data = [id];
    db.base(sql, data, (err, result) => {
        if (err) return;
        res.render('editBook', result[0]);
    })
};
// 编辑图书，跳转到列表页
exports.editBook = (req, res) => {
    let formData = req.body;
    let sql = 'UPDATE book SET name=?, author=?, category=?, description=? where id=?';
    let data = [formData.name, formData.author, formData.category, formData.description, formData.id];
    db.base(sql, data, (err, result) => {
        if (err) return;
        if (result.affectedRows >= 1) {
            console.log('更新数据成功！');
            res.redirect('/');
        }
    });
}
// 删除图书信息
exports.deleteBook = (req, res) => {
    let id = req.query.id;
    let sql = 'DELETE from book where id=?';
    let data = [id];
    db.base(sql, data, (err, results) => {
        if (err) return;
        if (results.affectedRows >= 1) {
            console.log('删除数据成功！');
            res.redirect('/');
        }
    });
}