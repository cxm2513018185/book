/**
 * 初始化数据库数据
 */
const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, '../data.json'), (err, content) => {
    if (err) return;
    let arrList = JSON.parse(content);
    let arr = [];
    arrList.forEach(item => {
        let sql = `insert into book (name, author, category, description) values ('${item.name}', '${item.author}', '${item.category}', '${item.desc}');`;
        arr.push(sql);
    });
    fs.writeFile(path.join(__dirname, 'data.sql'), arr.join(''), 'utf-8', (err) => {
        if (!err) {
            console.log('数据库数据初始化成功');
        }
    })
})
