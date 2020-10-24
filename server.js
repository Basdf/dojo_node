var express = require('express')
var http = require('http')
var app = express()
const port = process.env.PORT || 8000;
let server = require('http').Server(app);
const controller = require("./controller/roman-numerals.controller");

app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

app.get("/numerals/:number", controller.romanNumber);
server.listen(port, () => {
    console.log("App is running on port " + port);
});