/**
 * 获取全部数据
 */
const db = require('./db');
let sql = 'select count(*) as total from book';
let data = null;
db.base(sql, data, (error, results) => {
    if (error) throw error;
    console.log('共查询到book数据库表' + results[0].total + '条数据');
});