var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("dogs.ejs");
});

app.listen(3000, function(){
    console.log("Server is running");
});

