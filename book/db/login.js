/**
 * 登录验证（前端+后端）
 */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use('/user', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
    let obj = req.body;
    // console.log(obj);
    let sql = 'select count(*) as total from user where username = ? and password = ?';
    let data = [obj.username, obj.password];
    db.base(sql, data, (err, result) => {
        if (err) return;
        if (result[0].total == 1) {
            res.send('login success!');
        } else {
            res.send('login failure!');
        }
    })
});

app.listen(3000, () => {
    console.log('服务已启动，端口3000');
})