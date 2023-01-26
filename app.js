const express = require("express");
const path = require("path")

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

const todoRouter = require("./src/router/todo.router.js");
const indexRouter = require('./src/router/index.router.js')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(indexRouter);
app.use(todoRouter);


console.log("Servidor en el puerto " + PORT);
app.listen(PORT);