const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/crearTodo', (req, res) => {
    res.render("crearTodo")
})
module.exports = router;