/**
 * 删除数据
 */
const db = require('./db');

let sql = 'DELETE from book where id=?';
let data = [8];
db.base(sql, data, (err, results) => {
    if (err) return;
    if (results.affectedRows == 1) {
        console.log('删除数据成功！');
    }
});