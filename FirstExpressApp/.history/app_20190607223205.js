var express = require("express");
var app = express();

// "/" "Hi there"
app.get("/", function(req, res){
    res.send("Hi there");
});
// "/bye" "Good bye"
// "/dog" "MEOW"
