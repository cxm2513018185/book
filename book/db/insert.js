/**
 * 添加数据
 */
const db = require('./db');

let sql = 'INSERT INTO book SET ?';
let data = {
    name: 'test',
    author: 'test',
    category: 'test',
    description: 'test'
};
db.base(sql, data, function (err, results) {
    if (err) return;
    if (results.affectedRows == 1) {
        console.log('添加数据成功！');
    }
});