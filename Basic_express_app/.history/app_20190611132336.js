var express = require("express");

var app = express();

console.log("Running now");

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.listen(3000, function(){
    console.log("Server has started");
});