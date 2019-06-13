var express = require("express");

var app = express();

console.log("Running now");

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    if (animal = "pig"){
        res.send("The " + animal + " says 'Oink'");
    } else {
        res.send(" Its not an animal");
    }
    
});

app.listen(3000, function(){
    console.log("Server has started");
});