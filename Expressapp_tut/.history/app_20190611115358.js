var express = require("express");

var app = express();


// "/", Hi there
app.get("/", function(req, res){
    res.send("Hi There Manoj");
})


// "/bye", Good Bye
// "dog", meow

app.listen(3000, function(){
    console.log("Server has started!!");
})