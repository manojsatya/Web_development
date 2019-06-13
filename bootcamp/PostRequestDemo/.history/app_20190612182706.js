var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    var friends = ["Rama", "Laxkam", "ravana", "Joey","monika","rach"];
    res.render("friends");
});

app.listen(3000, function(){
    console.log("Server has started");
});