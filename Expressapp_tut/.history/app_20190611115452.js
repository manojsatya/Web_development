var express = require("express");

var app = express();


// "/", Hi there
app.get("/", function(req, res){
    res.send("Hi There Manoj");
})

app.get("/bye", function(req, res){
    res.send("Good bye Manoj");
})


// "/bye", Good Bye
// "dog", meow

app.listen(3000, function(){
    console.log("Server has started!!");
})