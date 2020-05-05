/**
 * 更新数据
 */
const db = require('./db');

let sql = 'UPDATE book SET name=?, author=?, category=?, description=? where id=?';
let data = ['测试数据', 'test', 'test', 'test', 8];
db.base(sql, data, (err, results) => {
    if (err) return;
    if (results.affectedRows == 1) {
        console.log('更新数据成功！');
    }
});