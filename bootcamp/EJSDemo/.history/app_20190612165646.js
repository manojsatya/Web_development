var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});    
});

app.get("/posts", function(req, res){
    var posts = [
        {title : "Post 1", author: "Manoj"},
        {title : "Post 2", author: "Manu"},
        {title : "Post 3", author: "Manojsatya"}
    ]
    res.render("posts.ejs", {posts : posts});
});

app.listen(3000, function(){
    console.log("Server is running");
});

