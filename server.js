var express = require('express')
var http = require('http')
var app = express()
const controller = require("../dojo_node/controller/roman-numerals.controller");

app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

app.get("/numerals/:number", controller.romanNumber);
http.createServer(app).listen(8001, () => {
    console.log('Server started at http://localhost:8001');
});