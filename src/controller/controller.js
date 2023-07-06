const connection = require("../db/db.js")


const getTodos = (req, res) => {
    connection.query('SELECT * from todo', (err, results) => {
        if (err != null) {
            console.log(err)
            res.send("No se han encontrado los todos.")
        } else {
            res.json(results)
        }
    })
}

const createTodo = (req, res) => {
    const {nombre, estado, info} = req.body
    console.log(req.body)
    connection.query('INSERT INTO todo(estado, informacion, nombreTarea) VALUES(?,?,?)', [estado, info, nombre], (err, results) => {
        if (err != null) {
            console.log(err)
            res.send("No se ha podido crear el todo.")
        } else {
            res.redirect('/')
        }
    })
}

const getTodo = (req, res) => {
    const id_todo = req.params.id
    connection.query('SELECT * FROM todo WHERE id = ?', [id_todo], (err, results) => {
        if (results.length > 0) {
            res.json(results)
        }
        else {
            res.send('Todo no encontrado')
        }
    })  
}

const deleteTodo = (req, res) => {
    const id_todo = req.params.id
    connection.query('DELETE FROM todo WHERE id = ?', [id_todo], (err, results) => {
        if (results.affectedRows > 0) {
            res.send('todo Eliminado');
        } else {
            res.send('todo no encontrado')
        }
    })
}

const updateTodo = (req, res) => {
    const {nombre, info, estado} = req.body
    connection.query('UPDATE todo SET nombreTarea = IFNULL(?, nombreTarea), informacion = IFNULL(?, informacion), estado = IFNULL(?, estado)', [nombre, info, estado], (err, results) => {
        if (results.affectedRows > 0) {
        res.send('todo actualizado')
        }
        else {
            res.send('No se encontro el todo')
        }
    })
}
module.exports = {getTodos, createTodo, getTodo, deleteTodo, updateTodo}