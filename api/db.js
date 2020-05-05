/**
 * 封装数据库通用api
 */
exports.base = (sql, data, callback) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'book'
    });

    connection.connect();

    let query = connection.query(sql, data, (error, results, fields) => {
        callback(error, results);
    });
    connection.end();
}