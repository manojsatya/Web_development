var express = require("express");

var app = express();


// "/", Hi there
app.get("/", function(req, res){
    res.send("Hi There Manoj");
});

// "/bye", Good Bye
app.get("/bye", function(req, res){
    res.send("Good bye Manoj");
});

// "dog", meow
app.get("/dog", function(req, res){
    res.send("MEOW Manoj");
});

app.get("/r/:subredditName/comments/:id/:name", function(req, res){
    console.log(req.params);
    res.send("Welcome to reddit!!")
});

app.get("*", function(req, res){
    res.send("You are a star");
});


app.listen(3000, function(){
    console.log("Server has started!!");
});