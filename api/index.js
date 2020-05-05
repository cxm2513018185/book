/**
 * 后台接口开发
 */
const express = require('express');
const db = require('./db');
const app = express();

// json接口
// app.get('/allbooks', (req, res) => {
//     let sql = 'select * from book';
//     db.base(sql, null, (err, result) => {
//         if (err) return;
//         res.json(result);
//     })
// });
// jsonp接口
// app.set('jsonp callback name', 'cb');
// app.get('/allbooks', (req, res) => {
//     let sql = 'select * from book';
//     db.base(sql, null, (err, result) => {
//         if (err) return;
//         res.jsonp(result);
//     })
// });
// resultful接口 http://localhost:3000/books/book/1
app.get('/books/book/:id', (req, res) => {
    let id = req.params.id;
    let sql = 'select * from book where id = ?';
    let data = [id];
    db.base(sql, data, (err, result) => {
        if (err) return;
        res.send(result[0]);
    })
})

app.listen(3000, () => {
    console.log('服务已启动，端口3000');
})

