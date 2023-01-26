const express = require("express");
var router = express.Router();
const {getTodo, getTodos, createTodo, updateTodo, deleteTodo} = require('../controller/controller.js')

router.get('/', (req, res) => {
    res.send("Hello World");
})

router.get('/todos', getTodos)
router.post('/todos', createTodo)
router.get('/todos/:id', getTodo)
router.patch('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)


module.exports = router;