var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Welcome to the home page</h1>");
})

app.listen(3000, function(){
    console.log("Server is running");
});

