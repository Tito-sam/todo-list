const express = require("express");
const path = require("path")

const app = express();
const PORT = 3000;

var router = require("./src/router/router.js");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

console.log("Servidor en el puerto " + PORT);
app.listen(PORT);