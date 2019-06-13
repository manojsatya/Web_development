var express = require("express");

var app = express();

console.log("Running now");

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    //console.log("The " + animal + " says ");
    res.send("The " + animal + " says ");
});

app.listen(3000, function(){
    console.log("Server has started");
});