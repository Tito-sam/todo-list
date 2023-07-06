const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/crearTodo', (req, res) => {
    res.render("crearTodo")
})

router.get('/infoTodo', (req, res) => {
    res.render('info-todo')
})

module.exports = router;