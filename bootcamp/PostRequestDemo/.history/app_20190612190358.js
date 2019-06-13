var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    res.send("You have reached the post route");
});

app.get("/friends", function(req, res){
    var friends = ["Rama", "Laxkam", "ravana", "Joey","monika","rach"];
    res.render("friends",{friends: friends});
});

app.listen(3000, function(){
    console.log("Server has started");
});