/**
 * 业务功能
 */
const db = require('.db');
exports.allBooks = (req, res) => {
    let sql = 'select * from book';
    db.base(sql, null, (err, result) => {
        if (err) return;
        res.json(result);
    })
};
exports.addBook = (req, res) => {
    let data = req.body;
    let sql = 'insert into book set ?';
    db.base(sql, data, (err, result) => {
        if (err) return;
        if (result.affectedRows == 1) {
            res.json({
                flag: 1
            })
        } else {
            res.json({
                flag: 2
            })
        }
    })
};
exports.getBookById = (req, res) => {
    let id = req.params.id;
    let sql = 'select * from book where id = ?';
    let data = [id];
    db.base(sql, data, (err, result) => {
        if (err) return;
        res.json(result[0]);
    })
};
exports.editBook = (req, res) => {
    let formData = req.body;
    let sql = 'update book set name = ?, author = ?, category = ?, description = ? where id = ?';
    let data = [formData.name, formData.author, formData.category, formData.description, formData.id];
    db.base(sql, data, (err, result) => {
        if (err) return;
        if (result.affectedRows == 1) {
            res.json({
                flag: 1
            });
        } else {
            res.json({
                flag: 2
            });
        }
    })
};
exports.deleteBook = (req, res) => {
    let id = req.params.id;
    let sql = 'delete from book where id = ?';
    let data = [id];
    db.base(sql, data, (err, result) => {
        if (err) return;
        if (result.affectedRows == 1) {
            res.json({
                flag: 1
            });
        } else {
            res.json({
                flag: 2
            });
        }
    })
};