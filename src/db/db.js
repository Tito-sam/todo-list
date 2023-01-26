const mysql = require("mysql2")

const connection = mysql.createPool({
    host: 'localhost',
    user:'root',
    database: 'todo-list',
})

module.exports = connection;