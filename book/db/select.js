/**
 * 查询数据
 */
const db = require('./db');

let sql = 'select * from book';
let data = null;
db.base(sql, data, (err, results) => {
    if (err) return;
    console.log(results);
});