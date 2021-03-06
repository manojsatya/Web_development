var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    console.log(req.body.newfriend);
    res.send("You have reached the post route");
});

app.get("/friends", function(req, res){
    var friends = ["Rama", "Laxkam", "ravana", "Joey","monika","rach"];
    res.render("friends",{friends: friends});
});

app.listen(3000, function(){
    console.log("Server has started");
});