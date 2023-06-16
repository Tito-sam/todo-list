const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    database: 'todo-listdb',
})

module.exports = connection;