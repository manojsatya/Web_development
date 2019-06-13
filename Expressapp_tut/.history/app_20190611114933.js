var express = require("express");

var app = express();


// "/", Hi there
app.get("/", function(req, res){
    res.send("Hi There");
})


// "/bye", Good Bye
// "dog", meow